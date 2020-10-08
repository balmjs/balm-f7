### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-top-app-bar>` props with default value.
  UiTopAppBar: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/top-app-bar/top-app-bar.scss';
@use 'balm-ui/components/icon-button/icon-button.scss';
```

```js
import Vue from 'vue';
import UiTopAppBar from 'balm-ui/components/top-app-bar';

// Optional. Overwrite `<ui-top-app-bar>` props with default value.
Vue.use(UiTopAppBar, {
  // some props
});
```