var NodeTree = function(){
  this.createNode = function(objTree, parent, subTreeLabel, collapsedNodeBuilder, expandedNodeBuilder){
    var node = document.createElement('div');
    node.setAttribute('class', 'tree-node');
    
    var label = document.createElement('div');
    label.setAttribute('class', 'node-label-wrapper');
    label.setAttribute('onclick', 'nodeTree.toggle(this)');
    label.innerHTML = <div class='node-marker'></div>;
    
    var collapsed = collapsedNodeBuilder(objTree);
    collapsed.classList.add('node-label collapsed');

    var expanded = expandedNodeBuilder(objTree);
    expanded.classList.add('node-label expanded');
    node.appendChild(label);
    label.appendChild(collapsed);
    label.appendChild(expanded);

    var subTree = objTree[subTreeLabel];
    if (subTree && subTree.length > 0){
      var subNode = document.createElement('div');
      subNode.setAttribute('class', 'subtree-wrapper');
      subTree.forEach(x => {NodeTree(x, subNode, subTreeLabel, collapsedNodeBuilder, expandedNodeBuilder)});
      node.appendChild(subNode);
    }
  }
  
  this.toggle(element){
    var node = element.closest('tree-node');
    var isExpanded = node.hasAttribute('expanded');
    if (isExpanded){
      node.removeAttribute('expanded');
    }
  }
}

var nodeTree = new NodeTree();
