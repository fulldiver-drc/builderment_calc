var NodeTree = function(){
  var tree = this;
  this.createNode = function(objTree, parent, subTreeLabel, collapsedNodeBuilder, expandedNodeBuilder){
    objTree.forEach(obj => {
      parent.innerHTML = '';

      var node = document.createElement('div');
      node.setAttribute('class', 'tree-node');

      var label = document.createElement('div');
      label.setAttribute('class', 'node-label-wrapper');
      label.setAttribute('onclick', 'nodeTree.toggle(this)');
      label.innerHTML = `<div class='node-marker'></div>`;

      var collapsed = collapsedNodeBuilder(obj);
      collapsed.classList.add('node-label collapsed');

      var expanded = expandedNodeBuilder(obj);
      expanded.classList.add('node-label expanded');
      node.appendChild(label);
      label.appendChild(collapsed);
      label.appendChild(expanded);

      var subTree = obj[subTreeLabel];
      if (subTree && subTree.length > 0){
        var subNode = document.createElement('div');
        subNode.setAttribute('class', 'subtree-wrapper');
        tree.createNode(subTree, subNode, subTreeLabel, collapsedNodeBuilder, expandedNodeBuilder)});
        node.appendChild(subNode);
      }
      parent.appendChild(node);
    });
  }
  
  this.toggle = function(element){
    var node = element.closest('tree-node');
    var isExpanded = node.hasAttribute('expanded');
    if (isExpanded){
      node.removeAttribute('expanded');
    }
  }
}

var nodeTree = new NodeTree();
