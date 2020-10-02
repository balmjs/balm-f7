### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-file>` props with default value.
  UiFile: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/button/button';
@use 'balm-ui/components/file/file';
```

```js
import UiFile from 'balm-ui/components/file';

// `app`: Vue app
// Optional. Overwrite `<ui-file>` props with default value.
app.use(UiFile, {
  // some props
});
```