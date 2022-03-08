var NodeTree = function(){
  var tree = this;
  this.createNode = function(objTree, parent, subTreeLabel, labelBuilder, previewBuilder, preview, topLayer = true){
    objTree.forEach(obj => {
      if (topLayer)
        parent.innerHTML = '';

      var node = document.createElement('div');
      node.setAttribute('class', 'tree-node');

      var labelDiv = document.createElement('div');
      labelDiv.setAttribute('class', 'node-label-wrapper');
      
      var marker = document.createElement('div');
      marker.setAttribute('class', 'node-marker');
      marker.setAttribute('onclick', 'nodeTree.toggle(this)');
      labelDiv.appendChild(marker);
      node.appendChild(labelDiv);

      var previewNode = previewBuilder(obj);
      var label = labelBuilder(obj);
      label.classList.add('node-label');
      label.previewPane = preview;
      label.previewNode = previewNode;
      label.setAttribute('onclick', 'nodeTree.preview(this)');
      label.setAttribute('ondblclick', 'nodeTree.toggle(this)');
      labelDiv.appendChild(label);

      var subTree = obj[subTreeLabel];
      if (subTree && subTree.length > 0){
        var subNode = document.createElement('div');
        subNode.setAttribute('class', 'subtree-wrapper');
        tree.createNode(subTree, subNode, subTreeLabel, collapsedNodeBuilder, expandedNodeBuilder, preview, false);
        node.appendChild(subNode);
      }
      parent.appendChild(node);
    });
  }
  
  this.preview(element){
    element.previewPane.innerHTML = '';
    element.previewPane.appendChild(element.previewNode);
  }
  
  this.toggle = function(element){
    var node = element.closest('.tree-node');
    var isExpanded = node.hasAttribute('expanded');
    if (isExpanded)
      node.removeAttribute('expanded');
    else
      node.setAttribute('expanded', '');
  }
}

var nodeTree = new NodeTree();
