## Usage: BreadcrumbsComponent

The `BreadcrumbsComponent` is designed to enhance navigation within your Angular application by providing a breadcrumb trail that reflects the current route. This component is particularly useful for applications with complex routing structures, allowing users to easily navigate back to previous pages.

### 1. Define Breadcrumb Constants

Create a constants file to define your breadcrumb configuration. This helps in maintaining a clean structure and reusability across your application.:

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

### 2. Prepare Your Data

Define your breadcrumb data and configuration in your component:

```typescript
import { Component, inject } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BreadcrumbModel, BreadcrumbsComponent } from '@abudygold/angular-ui-kit';
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

| Input   | Type   | Description                                                                    |
| ------- | ------ | ------------------------------------------------------------------------------ |
| `label` | string | The text to be displayed for the breadcrumb item. Defaults to an empty string. |
| `icon`  | string | Optional icon associated with the breadcrumb item.                             |
| `url`   | string | Optional URL or route the breadcrumb item navigates to.                        |

---

## For more advanced usage:

- **Navigation:** Use the <code>url</code> property to make a breadcrumb item clickable, directing the user to a specific page or route.
- **Visual Enhancements:** The <code>icon</code> property can be used to add a visual cue or an icon next to the breadcrumb label.
- **Dynamic Breadcrumbs:** By creating an array of <code>BreadcrumbModel</code> objects, you can dynamically build a navigation path based on the user's location in the application.
