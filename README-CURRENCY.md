### Usage: CurrencyIntlPipe

The `CurrencyIntlPipe` is an Angular pipe that formats a number into a currency string based on the provided locale and currency. It uses the `Intl.NumberFormat` object for internationalization.

### 1\. Define Pipe

The `CurrencyIntlPipe` is a standalone pipe, meaning it can be imported directly into any component or module without needing to be declared in a parent module.

### 2\. Prepare Your Data

The pipe can be used directly in your component's template. The primary method, `transform`, takes a number and several optional parameters to format the output. The `parse` method is a utility for removing non-numeric characters from a string.

```typescript
// Example of how the pipe is used internally or in a component
// This is not a typical use case for a pipe, but for demonstration of the methods.
import { CurrencyIntlPipe } from '@abudygold/angular-ui-kit';

@Component({
	template: `
		<p>{{ amount | currencyIntl: 'EUR' : 'de-DE' }}</p>
		<p>{{ anotherAmount | currencyIntl }}</p>
	`,
})
export class ExampleComponent {
	amount = 1234.56;
	anotherAmount = 9876;
}

// Example of parse method
const currencyPipe = new CurrencyIntlPipe();
const parsedValue = currencyPipe.parse('$1,234.56 USD');
console.log(parsedValue); // Outputs: '123456'
```

### 3\. Use in Template

You can apply the pipe in your component's template to format numbers for display.

```html
<p>Default format: {{ 123456.78 | currencyIntl }}</p>
<p>Custom currency and locale: {{ 987654.32 | currencyIntl:'EUR':'de-DE' }}</p>
<p>No decimal places: {{ 50000 | currencyIntl:'JPY':'ja-JP':0:0 }}</p>
```

### 4\. API

| Method      | Parameters                                                                                                                                                          | Return Type | Description                                                                                                                                |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `transform` | `value: number` \<br\> `currency: string = 'USD'` \<br\> `locale: string = 'en-US'` \<br\> `minimumFractionDigits?: number` \<br\> `maximumFractionDigits?: number` | `string`    | Formats a number into a currency string using `Intl.NumberFormat`. You can specify the currency, locale, and the number of decimal places. |
| `parse`     | `value: string`                                                                                                                                                     | `string`    | A utility method to remove currency symbols, commas, periods, and spaces, returning a string of digits.                                    |

---

### For more advanced usage:

- **Internationalization**: Use the `locale` parameter to format currency according to different regional conventions, such as `en-US` for US dollars or `de-DE` for Euros.
- **Fraction Digits Control**: The `minimumFractionDigits` and `maximumFractionDigits` parameters allow for precise control over how decimal places are displayed, which is essential for currencies that don't use decimal points.
- **Reactive Data**: The pipe automatically updates when the input `value` changes, making it ideal for use with reactive data in your templates.
- **Custom Formatting**: By providing different values for `currency` and `locale`, you can easily adapt the pipe to display a wide range of global currencies without changing the underlying code.
