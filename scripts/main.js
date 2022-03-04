document.addEventListener('click', function(e){
  var element = e.target;
  if (element.tagName != "SELECT"){
    document.querySelectorAll('select[expanded]').forEach(node => {element.removeAttribute('expanded');});
  }
  if (element.hasAttribute('expanded'))
    element.removeAttribute('expanded');
  else
    element.setAttribute('expanded','');
});
