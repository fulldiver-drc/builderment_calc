var Tabs = function(){
  function removeNode(node){
    node.remove();
  }
  
  function setIndex(element, index){
    element.setAttribute('tab-index', index);
  }
  
  function init(){
    var allHeaders = document.querySelectorAll('.tab-headers');
    allHeaders.forEach(headerDiv => {
      var contentDiv = headerDiv.nextElementSibling;
      console.log(headerDiv.childNodes);
      var headers = [...(headerDiv.children)].filter(header => {
        return header.classList.contains('tab-header');
      });
      var contents = [...(contentDiv.children)].filter(content => {
        return content.classList.contains('tab-content');
      });
      var length = Math.min(headers.length, contents.length);
      headers.splice(length).forEach(removeNode);
      contents.splice(length).forEach(removeNode);
      headers.forEach(setIndex);
      contents.forEach(setIndex);
    });
  }
  
  this.setTab = function(tab){
    var tabContainer = tab.closest('.tabs');
    if (tab.hasAttribute('active'))
      return;
    var index = tab.getAttribute('tab-index');
    var headers = tabContainer.querySelector('.tab-headers').querySelectorAll('.tab-header');
    var contents = tabContainer.querySelector('.tab-contents').querySelectorAll('.tab-content');
    headers.forEach(x => {x.removeAttribute('active')});
    contents.forEach(x => {x.removeAttribute('active')});
    [...headers].find(x => {x.getAttribute('tab-index') == index}).setAttribute('active', '');
    [...contents].find(x => {x.getAttribute('tab-index') == index}).setAttribute('active', '');
  }
  
  document.addEventListener('DOMContentLoaded', init);
  return this;
}

var tabs = new Tabs();
