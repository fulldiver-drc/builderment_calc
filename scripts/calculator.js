import {items} from '/itemManagement.js';

function compareItems(item1, item2){
  if (item1.Label > item2.Label)
     return -1;
  if (item2.Label > item1.Label)
    return 1;
  return 0;
}

var selectedItems = [];

function selectItem(index, select){
  selectedItems[index].itemId = select.value;
}

function buildItemList(){
  var itemsClone = [...items];
  itemsClone.sort(compareItems);
  var options = `<option value='0'>Select an item</option>`;
  function addItemToList(item){
    options += `<option value='${item.Id}'>${item.Label}</option>`; 
  }
  itemsClone.forEach(addItemToList);
  return options;
}

var optionsText = buildItemList();

function buildItemRow(index=0){
  var nodeTemplate = document.createElement('div');
  nodeTemplate.innerHTML = `<select required onchange='selectItem(${index}, this)'>`;
  nodeTemplate.innerHTML += optionsText;
  nodeTemplate.innerHTML += '</select>';
  return nodeTemplate;
}

var itemSelection = document.getElementById('item-selection-main');

function addItem(index=0){
  selectedItems.splice(index, 0, {itemId: 0, multiplier: 1});
  itemSelection.insertBefore(buildItemRow(index), itemSelection.children[index]);
}

