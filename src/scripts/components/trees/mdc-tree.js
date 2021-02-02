class MdcTree {
  constructor(originData, treeData) {
    const { maxLevel, nodeMap } = treeData;

    this.maxLevel = maxLevel;
    this.nodeMap = nodeMap;
    this.nodeList = this.getData(originData);
  }

  get data() {
    return this.nodeList;
  }

  checkLeaf(item) {
    return !(item.children && item.children.length);
  }

  getData(nodes, level = 0, parentKey = '') {
    const list = [];

    for (let i = 0, len = nodes.length; i < len; i++) {
      let item = Object.assign({}, nodes[i]);
      let isLeaf = this.checkLeaf(item);

      item.level = level;
      item.isRoot = !level;
      item.isLeaf = isLeaf;
      item.expanded = false;
      item.selected = false;
      item.checked = false;
      item.parentKey = parentKey;

      if (!isLeaf) {
        item.indeterminate = false;
      }

      if (!this.nodeMap.has(item.key)) {
        this.nodeMap.set(item.key, item);
      }

      if (level < this.maxLevel) {
        item.children = this.getData(item.children, level + 1, item.key);
      }

      list.push(item);
    }

    return list;
  }

  static setSelectedValue(nodeMap, key, selected) {
    if (nodeMap.get(key)) {
      nodeMap.get(key).selected = selected;
    }
  }

  static setSelected(treeData, value) {
    const { nodeMap, selectedValue } = treeData;

    if (selectedValue) {
      this.setSelectedValue(nodeMap, selectedValue, false);
    }

    treeData.selectedValue = value;
    this.setSelectedValue(nodeMap, value, true);
  }

  static setChildrenCheckedValue(treeData, children, checked) {
    const { nodeMap } = treeData;

    for (let i = 0, len = children.length; i < len; i++) {
      let item = Object.assign({}, children[i]);

      if (nodeMap.get(item.key)) {
        nodeMap.get(item.key).checked = checked;
      }

      if (!item.isLeaf) {
        MdcTree.setChildrenCheckedValue(treeData, item.children, checked);
      }
    }
  }

  static setParentCheckedValue(treeData, item) {
    const { nodeMap } = treeData;
    const checkedList = item.children.filter((subitem) => subitem.checked)
      .length;

    if (checkedList) {
      const checkedAll = checkedList === item.children.length;

      nodeMap.get(item.key).checked = checkedAll;
      nodeMap.get(item.key).indeterminate = !checkedAll;
    } else {
      nodeMap.get(item.key).checked = false;
      nodeMap.get(item.key).indeterminate = false;
    }

    if (!item.isRoot && treeData.nodeMap.get(item.parentKey)) {
      MdcTree.setParentCheckedValue(
        treeData,
        treeData.nodeMap.get(item.parentKey)
      );
    }
  }

  static setCheckedValue(treeData, item) {
    let checked = !item.checked;

    if (item.isLeaf) {
      item.checked = checked;
    } else {
      if (item.indeterminate) {
        item.indeterminate = false;
        checked = true;
      }

      item.checked = checked;

      MdcTree.setChildrenCheckedValue(treeData, item.children, checked);
    }

    if (item.parentKey && treeData.nodeMap.get(item.parentKey)) {
      this.setParentCheckedValue(
        treeData,
        treeData.nodeMap.get(item.parentKey)
      );
    }
  }
}

export { MdcTree };
