document.addEventListener('click', function(e){
  var element = e.target;
  if (element.tagName != "SELECT" || element.hasAttribute('disabled')){
    document.querySelectorAll('select[expanded]').forEach(node => {node.removeAttribute('expanded');});
    return;
  }
  else if (element.hasAttribute('expanded'))
    element.removeAttribute('expanded');
  else
    element.setAttribute('expanded','');
});

document.addEventListener('focusout', function(){
    document.querySelectorAll('select[expanded]').forEach(node => {node.removeAttribute('expanded');});
});
