# Angular UI Library

Welcome to the Angular UI Library! This project provides reusable Angular components to accelerate your development workflow.

## Getting Started

To use this library in your Angular project, install it via npm:

```bash
npm install @abudygold/angular-ui-lib
```

Then, import the desired modules into your application:

```typescript
import { TableComponent, TableModel } from '@abudygold/angular-ui-lib';
```

## Development

### Generating Components

Use Angular CLI to scaffold new components:

```bash
ng generate component component-name
```

For a list of available schematics, run:

```bash
ng generate --help
```

### Building the Library

To build the library, execute:

```bash
npm run build:lib
```

The output will be in the `dist/angular-ui-lib` directory.

### Publishing

After building, publish the library to npm:

```bash
cd dist/angular-ui-lib
npm publish / npm publish --access public
```

## Testing

### Unit Tests

Run unit tests with Karma:

```bash
ng test
```

### End-to-End Tests

To run e2e tests:

```bash
ng e2e
```

> Note: You may need to set up an e2e testing framework as Angular CLI does not include one by default.

## Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Angular Official Documentation](https://angular.dev/)

---

Feel free to contribute or open issues to help improve this library!
