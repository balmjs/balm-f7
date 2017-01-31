```html
<ui-table
  :data="data"
  :caption="caption"
  :thead="thead"
  :tbody="tbody"
  :tfoot="tfoot"
  :action="action"
  :selectable="selectable"
  :checkboxList="checkboxList"
  @view="onView"
  @edit="onEdit"
  @delete="onDelete"
  @selected="onSelected"
  detailView
  :detailViewData="tableDetail"
  @view-detail="viewDetail">
</ui-table>
```

```js
export default {
  data() {
    return {
      data: [],
      thead: [
        [{
          value: 'Base Info',
          col: 2,
          class: 'base-info'
        }, {
          value: 'Data Info',
          col: 2,
          class: 'data-info'
        }, {
          value: 'Operate',
          row: 2
        }],
        [{
          value: 'ID',
          sort: 'asc',
          by: 'id'
        },
        'Name',
        'Quantity',
        'Price']
      ],
      tbody: [
        {
          field: 'id',
          align: 'center'
        },
        {
          field: 'name',
          class: 'test',
          noNum: true,
          raw: true,
          fn: function(data) {
            return data + '!';
          }
        },
        'quantity',
        'price'
      ],
      tfoot: [
        null,
        null,
        {
          name: 'sum',
          field: 'quantity'
        },
        {
          name: 'avg',
          field: 'price'
        }
      ],
      action: [{
        type: 'link',
        name: 'view', // @view
        value: 'View'
      }, {
        type: 'icon',
        name: 'edit', // @edit
        value: '<i class="material-icons">mood</i>'
      }, {
        type: 'button',
        name: 'delete', // @delete
        value: 'Delete'
      }],
      selectable: true,
      checkboxList: []
    }
  },
  methods: {
    onView(data) {
      console.log('view', data);
    },
    onEdit(data) {
      console.log('edit', data);
    },
    onDelete(data) {
      console.log('delete', data);
    },
    onSelected(data) {
      this.checkboxList = data;
    }
  }
};
```