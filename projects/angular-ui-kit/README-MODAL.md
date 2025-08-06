## Usage: BreadcrumbsComponent

The `BreadcrumbsComponent` is designed to enhance navigation within your Angular application by providing a breadcrumb trail that reflects the current route. This component is particularly useful for applications with complex routing structures, allowing users to easily navigate back to previous pages.

### 1. Define Breadcrumb Components

Define your breadcrumb data and configuration in your component:

```typescript
import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ButtonComponent, ButtonModel, ModalComponent } from '@devkitify/angular-ui-kit';

@Component({
	selector: 'app-example-dialog',
	imports: [MatDialogModule, ModalComponent, ButtonComponent],
	templateUrl: './example-dialog.component.html',
	styleUrl: './example-dialog.component.scss',
})
export class ExampleDialogComponent {
	#dialogRef = inject(MatDialogRef);

	cancelButton: ButtonModel = new ButtonModel('stroked', 'Cancel', 'primary');
	saveButton: ButtonModel = new ButtonModel('flat', 'Save', 'primary');

	onSubmit(): void {
		this.#dialogRef.close();
	}
}
```

### 2. Use in Template

Add the component to your template and bind your data:

```html
<lib-modal [title]="'Example Dialog'">
	<ng-container content>
		<div class="!tw-mt-4">
			<p>This is example content</p>
		</div>
	</ng-container>
	<ng-container actions>
		<div class="tw-flex tw-justify-between tw-gap-3">
			<lib-button [config]="cancelButton" mat-dialog-close />
			<lib-button [config]="saveButton" (onClick)="onSubmit()" />
		</div>
	</ng-container>
</lib-modal>
```
