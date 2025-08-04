## Usage: BreadcrumbsComponent

The `FormlyComponent` is a powerful Angular component that allows you to create dynamic forms with various input types, including textboxes, dropdowns, datepickers, and chips. It supports reactive programming with Angular's `WritableSignal` for options management.

### 1. Define Form Constants

Create a constants file to define your form configuration and buttons. This helps in maintaining a clean structure and reusability across your application.:

```typescript
import { Routes } from '@angular/router';
import { EXAMPLE_ADD_BREADCRUMB, EXAMPLE_LIST_BREADCRUMB } from '../../shared/const/breadcrumbs';

export const EXAMPLE_ROUTES: Routes = [
	{
		path: 'example',
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./page/example-list/example-list.component').then(m => m.ExampleListComponent),
				data: {
					breadcrumb: EXAMPLE_LIST_BREADCRUMB,
				},
			},
			{
				path: 'add',
				loadComponent: () =>
					import('./page/example-add/example-add.component').then(m => m.ExampleAddComponent),
				data: {
					breadcrumb: EXAMPLE_ADD_BREADCRUMB,
				},
			},
		],
	},
];
```

This file centralizes your form's configuration and constants for easy reuse.

### 2. Prepare Your Data

Define your form data and configuration in your component:

```typescript
import { Component, inject } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BreadcrumbModel, BreadcrumbsComponent } from '@abudygold/angular-ui-lib';
import { filter } from 'rxjs';

@Component({
	selector: 'app-main-layout',
	imports: [BreadcrumbsComponent],
	templateUrl: './main-layout.component.html',
	styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
	#router = inject(Router);

	breadcrumbs: BreadcrumbModel[] = [];

	constructor() {
		this.#router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			const root = this.#router.routerState.root;
			this.buildBreadcrumbs(root.snapshot);
		});
	}

	buildBreadcrumbs(route: ActivatedRouteSnapshot | null): void {
		if (!route) return;

		const breadcrumbs = route.data['breadcrumb'];

		if (breadcrumbs) this.breadcrumbs = breadcrumbs;

		this.buildBreadcrumbs(route.firstChild);
	}
}
```

### 3. Use in Template

Add the component to your template and bind your data:

```html
<lib-breadcrumbs [breadcrumbs]="breadcrumbs" />
```

### 4. API

| Input       | Type                                                                                                                                                       | Description                                                                         |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `formClass` | string                                                                                                                                                     | Custom CSS class for the form container.                                            |
| `fields`    | Array<{ type: FormType; control: string; fieldClass?: string; optionKey?: string; messageValidation?: Record<string, string>; config: ConfigFieldModel; }> | An array of objects that define the form fields.                                    |
| `options`   | Record<string, WritableSignal<any[]>>                                                                                                                      | An object to store and manage options for fields like dropdowns, radios, and chips. |

---

## For more advanced usage:

- **Dynamic Form Fields:** Use the <code>fields</code> property to dynamically generate various input types such as textboxes, dropdowns, datepickers, and chips within the form.
- **Reactive Options:** The <code>options</code> property uses <code>WritableSignal<any[]></code> to provide reactive data for form fields like dropdowns, checkboxes, and chips.
- **Custom Validation Messages:** The <code>messageValidation</code> property can be used to provide custom error messages for form validation.
- **Layout and Styling:** Use <code>formClass</code> to apply custom CSS to the form layout and <code>fieldClass</code> to style individual form fields.
- **Complex Checkboxes:** The <code>checkbox</code> field type supports nested options, defined by the <code>optionChildKey</code>, which allows for a parent-child relationship in the checkboxes.
