### Usage: ApiService

The `ApiService` is an injectable service for making HTTP requests in an Angular application. It uses Angular's `HttpClient` and `takeUntilDestroyed` to automatically manage subscriptions.

### 1\. Define API Service

The `ApiService` is provided at the root level, making it available throughout the application. It includes methods for common HTTP verbs like `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`. The `takeUntilDestroyed` operator is used to handle unsubscription automatically when the component is destroyed, preventing memory leaks.

### 2\. Prepare Your Data

Inject the `ApiService` into your component or service and call the appropriate method.

```typescript
import { TableModel, TableComponent, ApiService } from '@abudygold/angular-ui-lib';
import { inject } from '@angular/core';

@Component({
	imports: [TableComponent, TableModel, ApiService],
})
export class ExampleComponent {
	#apiService = inject(ApiService);

	tableConfig: TableModel = EXAMPLE_TABLE;
	params: Record<string, any> = {};

	constructor() {
		this.#getUsers();
	}

	#getUsers(): void {
		this.tableConfig.isLoading.set(true);
		this.#apiService.get(API_URL + '/users', this.params).subscribe({
			next: (resp: any) => {
				this.tableConfig.dataSource = resp as any[];
				this.tableConfig.dataTotal = (resp as any[]).length;
				this.tableConfig.generateDataType();
				// ...
			},
			complete: () => this.tableConfig.isLoading.set(false),
			error: () => this.tableConfig.isLoading.set(false),
		});
	}

	// ...
}
```

This example shows how to use the `ApiService` to fetch user data and update a table component.

### 3\. Use in Component

Once the `ApiService` is injected, you can call its methods to interact with your backend API.

```typescript
// Example using a POST request
this.#apiService.post(API_URL + '/users', newUser).subscribe({
	next: response => {
		console.log('User created successfully:', response);
	},
	error: error => {
		console.error('Error creating user:', error);
	},
});
```

### 4\. API

| Method   | Parameters                                           | Return Type     | Description                                                                                           |
| :------- | :--------------------------------------------------- | :-------------- | :---------------------------------------------------------------------------------------------------- |
| `get`    | `url: string`, `paramsReq?: any`, `headersReq?: any` | `Observable<T>` | Performs a GET request to the specified URL. It can include optional query parameters and headers.    |
| `post`   | `url: string`, `body: any`, `headersReq?: any`       | `Observable<T>` | Performs a POST request with a request body to the specified URL. It can include optional headers.    |
| `put`    | `url: string`, `body: any`, `headersReq?: any`       | `Observable<T>` | Performs a PUT request with a request body to the specified URL. It can include optional headers.     |
| `patch`  | `url: string`, `body: any`, `headersReq?: any`       | `Observable<T>` | Performs a PATCH request with a request body to the specified URL. It can include optional headers.   |
| `delete` | `url: string`, `paramsReq?: any`, `headersReq?: any` | `Observable<T>` | Performs a DELETE request to the specified URL. It can include optional query parameters and headers. |

---

### For more advanced usage:

- **Request Configuration**: Each method allows for optional `paramsReq` and `headersReq` arguments to customize the request with query parameters and headers. This is useful for authentication, specifying content types, or filtering data.
- **Error Handling**: The methods return an `Observable`, allowing you to use standard RxJS operators like `catchError` to handle API errors gracefully in your components or services.
- **Automatic Unsubscription**: The service uses `takeUntilDestroyed` from `@angular/core/rxjs-interop` to automatically unsubscribe from HTTP requests when the consuming component is destroyed, preventing memory leaks.
- **Data Transformation**: The `ApiService` returns an `Observable<T>`, where `T` can be any type, allowing you to easily map the API response to your application's data models.
