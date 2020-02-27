```html
<ui-datepicker></ui-datepicker>
```

#### Props

| Name                | Type                  | Default | Description                                                                                                                        |
| ------------------- | --------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `model` (`v-model`) | string, number, array | `''`    | Mandatory.                                                                                                                         |
| `outlined`          | boolean               | `false` | Styles the datepicker as an outlined text field.                                                                                   |
| `id`                | string                | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`.                                                      |
| `label`             | string                | `null`  | A text caption or description for the datepicker, which use the input's `placeholder` attribute instead.                           |
| `noLabel`           | boolean               | `false` | Styles the datepicker that has no label.                                                                                           |
| `placeholder`       | string                | `null`  | The _placeholder_ attribute of the `<input>`.                                                                                      |
| `fullwidth`         | boolean               | `false` | Styles the datepicker as a full width text field.                                                                                  |
| `disabled`          | boolean               | `false` | Styles the datepicker as a disabled text field.                                                                                    |
| `leadingIcon`       | boolean, string       | `false` | Styles the datepicker as a text field with a leading icon. (Use with `before` slot)                                                |
| `icon`              | string                | `''`    | Optional. Indicates an icon element with a leading icon. See [Material Icons](/#/icons) list. (No need to configure `leadingIcon`) |
| `trailingIcon`      | boolean, string       | `false` | Styles the datepicker as a text field with a trailing icon. (Use with `after` slot)                                                |
| `config`            | object                | `{}`    | See [Flatpickr configuration](https://flatpickr.js.org/options/).                                                                  |
| `toggle`            | boolean               | `false` | Show calendar icon button.                                                                                                         |
| `clear`             | boolean               | `false` | Show clear icon button.                                                                                                            |

#### Slots

| Name      | Slots       | Description                                                                |
| --------- | ----------- | -------------------------------------------------------------------------- |
| `default` |             | The default slot holds the label for the datepicker.                       |
| `before`  | `iconClass` | The before slot holds a custom leading icon.                               |
| `after`   | `iconClass` | The before slot holds a custom trailing icon. (When `trailingIcon = true`) |
| `toggle`  |             | The custom toggle icon button. (When `trailingIcon = false`)               |
| `clear`   |             | The custom clear icon button. (When `trailingIcon = false`)                |

#### Events

| Name     | Type                             | Description                                 |
| -------- | -------------------------------- | ------------------------------------------- |
| `change` | `function(value: string\|array)` | Emits when the datepicker value is changed. |

> NOTE: If you are not using `v-model`, you should listen for the datepicker using `@change` and update the `model` prop.

```html
// Automatic
<ui-datepicker v-model="value"></ui-datepicker>

// Manual
<ui-datepicker
  :model="value"
  @change="$balmUI.onChange('value', $event)"
></ui-datepicker>
```