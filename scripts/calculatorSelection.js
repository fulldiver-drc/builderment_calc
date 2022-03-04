import {items} from './itemManagement.js';

function compareItems(item1, item2){
  if (item1.Label > item2.Label)
     return -1;
  if (item2.Label > item1.Label)
    return 1;
  return 0;
}

var selectedItems = [];

window.selectItem = function(select){
  select.closest('[itemselect]').selectedItem.itemId = select.value;
}

function buildItemList(){
  var itemsClone = [...items];
  if (itemsClone.length === 0){
    for (var i=0; i<5; i++){
      itemsClone.push({Id: i, Label: 'Test item ' + i});
    }
  }
  itemsClone.sort(compareItems);
  var options = `<option value='0'>Select an item</option>`;
  function addItemToList(item){
    options += `<option value=${item.Id}>${item.Label}</option>`; 
  }
  itemsClone.forEach(addItemToList);
  return options;
}

const optionsText = buildItemList();

function buildItemRow(){
  var nodeTemplate = document.createElement('div');
  nodeTemplate.setAttribute('itemselect', '');
  nodeTemplate.innerHTML = `<select required onchange='selectItem(this)'>${optionsText}</select>`;
  return nodeTemplate;
}

var itemSelection = document.getElementById('item-selection-main');

window.addItem = function(){
  var newNode = buildItemRow();
  newNode.selectedItem = {itemId: 0, multiplier: 1};
  
  selectedItems.push(newNode.selectedItem);
  itemSelection.appendChild(newNode);
}

window.removeItem = function(button){
  var itemDiv = button.closest('[itemselect]');
  selectedItems.splice(indexOf(itemDiv.selectedItem), 1);
  itemDiv.remove()
}

