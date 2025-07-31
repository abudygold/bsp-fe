## Usage: TableComponent

The `TableComponent` lets you easily display tabular data in your Angular application.

### 1. Import the Module

First, import the module in your feature module:

```typescript
import { TableComponent } from '@abudygold/angular-ui-lib';
```

Or, if you have a dedicated module (e.g., `UiLibModule`):

```typescript
import { UiLibModule } from '@abudygold/angular-ui-lib';

@NgModule({
	imports: [UiLibModule],
})
export class YourModule {}
```

### 2. Prepare Your Data

Define your table data and columns in your component:

```typescript
import { TableModel } from '@abudygold/angular-ui-lib';

export class ExampleComponent {
	columns = [
		{ key: 'name', label: 'Name' },
		{ key: 'age', label: 'Age' },
		{ key: 'email', label: 'Email' },
	];

	data = [
		{ name: 'Alice', age: 30, email: 'alice@example.com' },
		{ name: 'Bob', age: 25, email: 'bob@example.com' },
	];
}
```

### 3. Use in Template

Add the component to your template and bind your data:

```html
<ui-table [columns]="columns" [data]="data"> </ui-table>
```

### 4. API

| Input     | Type  | Description                                    |
| --------- | ----- | ---------------------------------------------- |
| `columns` | array | Array of column definitions (`{ key, label }`) |
| `data`    | array | Array of row objects                           |

---

For more advanced usage and customization, see the source code or open an issue for help!
