var NodeTree = function(){
  var tree = this;
  this.createNode = function(objTree, parent, subTreeLabel, labelBuilder, previewBuilder, preview, topLayer = true){
    objTree.forEach((obj, ind) => {
      
      var subTree = obj[subTreeLabel];
      
      var node = document.createElement('div');
      node.setAttribute('class', 'tree-node');
      
      if (topLayer && ind === 0){
        parent.previewPane = preview;
      }

      var labelDiv = document.createElement('div');
      labelDiv.setAttribute('class', 'node-label-wrapper');
      
      var marker = document.createElement('div');
      marker.setAttribute('class', 'node-marker');
      marker.setAttribute('onclick', 'nodeTree.toggle()');
      node.appendChild(labelDiv);

      var previewNode = previewBuilder(obj);
      var label = labelBuilder(obj);
      label.classList.add('node-label');
      label.previewNode = previewNode;
      label.setAttribute('onclick', 'nodeTree.preview()');
      label.setAttribute('ondblclick', 'nodeTree.toggle()');
      labelDiv.appendChild(label);

      if (subTree && subTree.length > 0){
        labelDiv.prepend(marker);
        var subNode = document.createElement('div');
        subNode.setAttribute('class', 'subtree-wrapper');
        tree.createNode(subTree, subNode, subTreeLabel, labelBuilder, previewBuilder, preview, false);
        node.appendChild(subNode);
      }
      parent.appendChild(node);
    });
  }
  
  this.preview = function(){
    var element = event.currentTarget;
    
    element.closest('.tree-node').setAttribute('expanded', '')
    
    var rootNode = element.closest('.tree-node:not(.tree-node .tree-node)').parentElement;
    rootNode.previewPane.innerHTML = '';
    rootNode.previewPane.appendChild(element.previewNode);
    rootNode.querySelectorAll('.node-label[selected]').forEach(x => {x.removeAttribute('selected');});
    
    element.setAttribute('selected', '');
  }
  
  this.toggle = function(forceExpand = false){
    event.preventDefault();
    var node = event.currentTarget.closest('.tree-node');
    var isExpanded = node.hasAttribute('expanded');
    if (isExpanded)
      node.removeAttribute('expanded');
    else
      node.setAttribute('expanded', '');
  }
}

var nodeTree = new NodeTree();
