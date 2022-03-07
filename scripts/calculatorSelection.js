import {getItemList, getItemDetails, sortSettings} from './itemManagement.js';

var selectedItems = [];

window.selectItem = function(select, isMultiplier=false){
  var itemDiv = select.closest('[itemselect]');
  var item = itemDiv.selectedItem;
  if (isMultiplier){
    if (select.valueAsNumber < 1)
       select.value = 1;
    item.multiplier = select.valueAsNumber;
  }
  else{
    item.itemId = parseInt(select.value);
    var preview = itemDiv.querySelector('.item-quick-rate');
    preview.setAttribute('itemid', item.itemId);
    var itemDetail = getItemDetails(item.itemId);
    console.log('Item:', itemDetail, '\nMultiplier:', item.multiplier);
    preview.innerHTML = `Rate: ${Math.round(getItemDetails(item.itemId).Base * item.multiplier)} / min`
  }
}

function buildItemList(){
  var items = getItemList('', sortSettings.label);
  if (items.length === 0){
    for (var i=0; i<5; i++){
      items.push({Id: i, Label: 'Test item ' + i});
    }
  }
  return items.reduce((prevValue, item) => {return prevValue += `<option value=${item.Id}>${item.Label}</option>`}, '<option value=0>-Select an item-</option>');
}

const optionsText = buildItemList();

function buildAddItemButton(){
  var nodeTemplate = document.createElement('a');
  nodeTemplate.setAttribute('onclick', 'addItem()');
  nodeTemplate.setAttribute('class', 'ico');
  nodeTemplate.setAttribute('additem', '');
  nodeTemplate.innerHTML = '&#xE109';
  return nodeTemplate;
}

function buildItemRow(){
  var nodeTemplate = document.createElement('div');
  nodeTemplate.setAttribute('itemselect', '');
  nodeTemplate.innerHTML = `<select required onchange='selectItem(this)' class='item-select'>${optionsText}</select>`;
  nodeTemplate.innerHTML += `<input type='number' placeholder='Total level multiplier' value='1' class='item-multiply' onfocusout='selectItem(this, true)' min=1 />`;
  nodeTemplate.innerHTML += `<a onclick='removeItem(this)' class='ico' removeitem>&#xE108</a><a onclick='addItem()' class='ico' additem>&#xE109</a>`;
  nodeTemplate.innerHTML += `<div itemid=0 mult=0 class='item-quick-rate'>Rate: N/A</div>`
  return nodeTemplate;
}

var itemSelection = document.getElementById('item-selection-main');

window.addItem = function(){
  var newNode = buildItemRow();
  newNode.selectedItem = {itemId: 0, multiplier: 1};
  document.querySelectorAll('[additem]').forEach(node => {node.remove()});
  
  selectedItems.push(newNode.selectedItem);
  itemSelection.appendChild(newNode);
}

window.removeItem = function(button){
  var itemDiv = button.closest('[itemselect]');
  selectedItems.splice(selectedItems.indexOf(itemDiv.selectedItem), 1);
  
  if (!itemDiv.nextElementSibling)
    itemDiv.previousElementSibling.appendChild(buildAddItemButton());
  itemDiv.remove()
}

window.logItems = function(){
  console.log(selectedItems);
}

