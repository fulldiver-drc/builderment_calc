document.addEventListener('click', function(e){
  var element = e.target;
  if (element.matches(':not(select), [disabled]'){
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
