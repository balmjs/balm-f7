```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-segmented-buttons>` props with default value.
  UiSegmentedButtons: {
    // some props
  }
});
```
