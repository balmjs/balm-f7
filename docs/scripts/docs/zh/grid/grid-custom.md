## Manual custom grid for global

```js
$setGrid(property, size, value);
```

| Param      | Type   | Default | Description                                                 |
| ---------- | ------ | ------- | ----------------------------------------------------------- |
| `property` | string | `''`    | Grid custom property: `margin`, `gutter` or `column-width`. |
| `size`     | string | `''`    | The target platform: `desktop`, `tablet` or `phone`.        |
| `value`    | string | `''`    | Grid custom value.                                          |

### Grid properties

- `margin`: the size of the grid margin.
- `gutter`: the size of the gutter between cells.
- `column-width`: the width of the column within the grid.

### Use `$setGrid` without `.vue` component

> New in 8.1.0

```js
import { useGrid } from 'balm-ui';
// OR
// import { useGrid } from 'balm-ui/plugins/grid';

const $setGrid = useGrid();
```
