### Usage: User Agent Functions

The provided function is a utility to detect if a user is on a mobile device based on the browser's user agent string.

### 1\. Define Function

The `isMobile` function is a standalone utility that can be imported and used anywhere in your application. It returns a boolean value.

### 2\. Prepare Your Data

There is no data preparation required for this function. It directly checks the `window.navigator.userAgent` property to determine if the user is on a mobile device.

### 3\. Use in Component

You can call the `isMobile` function in your components, services, or templates to conditionally render content or apply different logic based on the device type.

```typescript
import { isMobile } from '@abudygold/angular-ui-kit';

@Component({
	selector: 'app-example',
	template: `
		@if (isMobileDevice) {
			<p>This is the mobile view.</p>
		} @else {
			<p>This is the desktop view.</p>
		}
	`,
})
export class ExampleComponent {
	isMobileDevice: boolean = isMobile();
}
```

This example shows how to use the function to determine the device type and display different content accordingly.

### 4\. API

| Method     | Parameters | Return Type | Description                                                                                                                     |
| :--------- | :--------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `isMobile` | None       | `boolean`   | Returns `true` if the user agent string matches a known mobile device (iPhone, iPad, iPod, Android), otherwise returns `false`. |

---

### For more advanced usage:

- **Conditional Logic**: The `isMobile` function can be used to apply different layouts, load specific components, or execute device-specific logic within your application.
- **Responsive Design**: While CSS media queries are the standard for responsive design, this function can be useful for scenarios where you need to change behavior on the component or service level, such as triggering a different data fetch or altering a service's functionality for mobile users.
- **Server-Side Rendering (SSR)**: This function is designed to run in a browser environment. When using SSR, you should ensure that this code is executed only on the client side, as `window` is not available on the server.
- **Framework Integration**: This function can be easily integrated into Angular signals, effects, or other reactive patterns to automatically update your application's state when the device type is relevant.
