```html
<ui-textfield label="Plus Text..." :model="text" @input.native="onInputChange('text', $event)"
  plus>
  <template slot="plus"><a href="javascript:void(0)">Button</a></template>
</ui-textfield>
```