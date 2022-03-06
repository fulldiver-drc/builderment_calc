const items = [];
var buildings = [];
var ingredients = [];
var sortSettings = {
  id: 0,
  label: 1,
  base: 2,
  building: 3
}

function getItemDetails(itemName){
}

function generateInefficientSummary(){
}

function generateEfficientSummary(){
}

function generateSummary(isEfficient=false){
  if (isEfficient)
     return generateEfficientSummary();
  else
    return generateInefficientSummary();
}

function filterItems(item){
  return this.test(item.Label);
}

function sortItemsById(item1, item2){
  if (item1.Id < item2.Id)
    return 1;
  if (item2.Id < item1.Id)
    return -1;
  return 0;
}

function sortItemsById(item1, item2){
  if (item1.Id < item2.Id)
    return 1;
  if (item2.Id < item1.Id)
    return -1;
  return 0;
}

function sortItemsByBase(item1, item2){
  if (item1.Base < item2.Base)
    return 1;
  if (item2.Base < item1.Base)
    return -1;
  return 0;
}

function sortItemsByBuilding(item1, item2){
  var building1 = '';
  var building2 = '';
  for (var i=0; i<buildings.length && (building1 == '' || building2 ==''); i++){
    if (item1.Building == buildings[i].Id)
      building1 = buildings[i].Label;
    if (item2.Building == buildings[i].Id)
      building2 = buildings[i].Label;
  }
  
  if (buildings1 < buildings2)
    return 1;
  if (buildings2 < buildings1)
    return -1;
  return 0;
}

function getItemList(searchKey, sortSetting = 0;){
  var list = [...items];
  if (searchKey !== ''){
    var regSearchKey - new RegExp(searchKey);
    list = items.filter(filterItems, regSearchKey);
  }
  
  switch (sortSetting){
    case (sortSettings.id):
      list.sort(sortItemsById);
      break;
    case (sortSettings.label):
      list.sort(sortItemsByLabel);
      break;
    case (sortSettings.building):
      list.sort(sortItemsByBuilding);
      break;
    case (sortSettings.base):
      list.sort(sortItemsByBase);
      break;
  }
  
  return list;
    
}

export {items, buildings, ingredients, getItemDetails, generateSummary, sortSettings, getItemList};
