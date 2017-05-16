const COMPONENTS = [{
  icon: 'button',
  name: 'Button',
  description: 'Raised and flat buttons'
}, {
  icon: 'card',
  name: 'Card',
  description: 'Various card layout styles'
}, {
  icon: 'selection_control',
  name: 'Checkbox',
  description: 'Multi-selection controls'
}, {
  icon: 'dialog',
  name: 'Dialog',
  description: 'Secondary text'
}, {
  icon: 'side_navigation',
  name: 'Drawer',
  description: 'Temporary',
  url: 'temporary-drawer'
}, {
  icon: 'side_navigation',
  name: 'Drawer',
  description: 'Persistent',
  url: 'persistent-drawer'
}, {
  icon: 'side_navigation',
  name: 'Drawer',
  description: 'Permanent drawer above toolbar',
  url: 'permanent-drawer-above-toolbar'
}, {
  icon: 'side_navigation',
  name: 'Drawer',
  description: 'Permanent drawer below toolbar',
  url: 'permanent-drawer-below-toolbar'
}, {
  icon: 'shadow',
  name: 'Elevation',
  description: 'Shadow for different elevations'
}, {
  icon: 'button',
  name: 'Floating action button',
  description: 'The primary action in an application',
  url: 'fab'
}, {
  icon: 'card',
  name: 'Grid list',
  description: '2D grid layouts',
  url: 'grid-list'
}, {
  icon: 'component',
  name: 'Icon toggle',
  description: 'Toggling icon states',
  url: 'icon-toggle'
}, {
  icon: 'card',
  name: 'Layout grid',
  description: 'Grid and gutter support',
  url: 'grid'
}, {
  icon: 'list',
  name: 'List',
  description: 'Item layouts in lists'
}, {
  icon: 'radio_button',
  name: 'Radio buttons',
  description: 'Single selection controls',
  url: 'radio'
}, {
  icon: 'ripple',
  name: 'Ripple',
  description: 'Touch ripple'
}, {
  icon: 'menu',
  name: 'Select',
  description: 'Popover selection menus'
}, {
  icon: 'menu',
  name: 'Simple Menu',
  description: 'Pop over menus',
  url: 'menu'
}, {
  icon: 'toast',
  name: 'Snackbar',
  description: 'Transient messages'
}, {
  icon: 'switch',
  name: 'Switch',
  description: 'On off switches'
}, {
  icon: 'tabs',
  name: 'Tabs',
  description: 'Tabs with support for icon and text labels'
}, {
  icon: 'text_field',
  name: 'Text field',
  description: 'Single and multiline text fields'
}, {
  icon: 'theme',
  name: 'Theme',
  description: 'Using primary and accent colors'
}, {
  icon: 'toolbar',
  name: 'Toolbar',
  description: 'Header and footers'
}, {
  icon: 'typography',
  name: 'Typography',
  description: 'Type hierarchy'
}];

let menu = [];
for (let component of COMPONENTS) {
  menu.push({
    icon: `ic_${component.icon}_24px.svg`,
    name: component.name,
    description: component.description,
    url: component.url || component.name.toLowerCase()
  });
}

export default menu;
