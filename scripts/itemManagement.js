const items =
  [{Id: 22, Label: "Wood", Order: 1, BuildingId: 5, BaseRate: 7.5},
  {Id: 34, Label: "Iron Ore", Order: 2, BuildingId: 5, BaseRate: 7.5},
  {Id: 12, Label: "Copper Ore", Order: 3, BuildingId: 5, BaseRate: 7.5},
  {Id: 8, Label: "Stone", Order: 4, BuildingId: 5, BaseRate: 7.5},
  {Id: 40, Label: "Coal", Order: 5, BuildingId: 5, BaseRate: 7.5},
  {Id: 25, Label: "Wolframite", Order: 6, BuildingId: 5, BaseRate: 7.5},
  {Id: 3, Label: "Wood Plank", Order: 7, BuildingId: 6, BaseRate: 15},
  {Id: 7, Label: "Wood Frame", Order: 8, BuildingId: 6, BaseRate: 7.5},
  {Id: 13, Label: "Copper Wire", Order: 9, BuildingId: 6, BaseRate: 30},
  {Id: 26, Label: "Heat Sink", Order: 10, BuildingId: 6, BaseRate: 10},
  {Id: 43, Label: "Iron Gear", Order: 11, BuildingId: 6, BaseRate: 15},
  {Id: 42, Label: "Iron Plating", Order: 12, BuildingId: 6, BaseRate: 20},
  {Id: 18, Label: "Steel Rod", Order: 13, BuildingId: 6, BaseRate: 15},
  {Id: 37, Label: "Sand", Order: 14, BuildingId: 6, BaseRate: 40},
  {Id: 21, Label: "Condenser Lens", Order: 15, BuildingId: 6, BaseRate: 20},
  {Id: 17, Label: "Carbon Fiber", Order: 16, BuildingId: 6, BaseRate: 7.5},
  {Id: 19, Label: "Coupler", Order: 17, BuildingId: 6, BaseRate: 6},
  {Id: 5, Label: "Particle Glue", Order: 18, BuildingId: 6, BaseRate: 20},
  {Id: 31, Label: "Iron Ingot", Order: 19, BuildingId: 4, BaseRate: 30},
  {Id: 16, Label: "Copper Ingot", Order: 20, BuildingId: 4, BaseRate: 30},
  {Id: 44, Label: "Silicon", Order: 21, BuildingId: 4, BaseRate: 20},
  {Id: 11, Label: "Glass", Order: 22, BuildingId: 4, BaseRate: 10},
  {Id: 35, Label: "Tungsten Ore", Order: 23, BuildingId: 4, BaseRate: 24},
  {Id: 23, Label: "Electromagnet", Order: 24, BuildingId: 7, BaseRate: 7.5},
  {Id: 1, Label: "Logic Circuit", Order: 25, BuildingId: 7, BaseRate: 10},
  {Id: 39, Label: "Metal Frame", Order: 26, BuildingId: 7, BaseRate: 5},
  {Id: 30, Label: "Battery", Order: 27, BuildingId: 7, BaseRate: 2.5},
  {Id: 27, Label: "Rotor", Order: 28, BuildingId: 7, BaseRate: 10},
  {Id: 6, Label: "Nano Wire", Order: 29, BuildingId: 7, BaseRate: 5},
  {Id: 20, Label: "Gyroscope", Order: 30, BuildingId: 7, BaseRate: 5},
  {Id: 10, Label: "Quantum Entangler", Order: 31, BuildingId: 7, BaseRate: 1},
  {Id: 33, Label: "Computer", Order: 32, BuildingId: 2, BaseRate: 7.5},
  {Id: 36, Label: "Electric Motor", Order: 33, BuildingId: 2, BaseRate: 3},
  {Id: 38, Label: "Stabilizer", Order: 34, BuildingId: 2, BaseRate: 2.5},
  {Id: 14, Label: "Industrial Frame", Order: 35, BuildingId: 2, BaseRate: 3},
  {Id: 15, Label: "Graphite", Order: 36, BuildingId: 3, BaseRate: 15},
  {Id: 41, Label: "Steel", Order: 37, BuildingId: 3, BaseRate: 7.5},
  {Id: 24, Label: "Concrete", Order: 38, BuildingId: 3, BaseRate: 7.5},
  {Id: 2, Label: "Tungsten Carbide", Order: 39, BuildingId: 3, BaseRate: 12},
  {Id: 9, Label: "Electron Microscope", Order: 40, BuildingId: 1, BaseRate: 2.5},
  {Id: 29, Label: "Turbocharger", Order: 41, BuildingId: 1, BaseRate: 4},
  {Id: 28, Label: "Supercomputer", Order: 42, BuildingId: 1, BaseRate: 2},
  {Id: 4, Label: "Atomic Locator", Order: 43, BuildingId: 1, BaseRate: 2},
  {Id: 32, Label: "Magnetic Field Generator", Order: 44, BuildingId: 1, BaseRate: 1.5},
  {Id: 46, Label: "Tank", Order: 45, BuildingId: 2, BaseRate: 6},
  {Id: 45, Label: "Matter Compressor", Order: 46, BuildingId: 1, BaseRate: 2},
  {Id: 47, Label: "Energy Cube", Order: 47, BuildingId: 7, BaseRate: 2},
  {Id: 48, Label: "Matter Duplicator", Order: 48, BuildingId: 1, BaseRate: (2/3)}];
var buildings =
  [{Id: 6, Label: "Workshop", Order: 1, IngredientCount: 1},
  {Id: 4, Label: "Furnace", Order: 2, IngredientCount: 1},
  {Id: 7, Label: "Machine Shop", Order: 3, IngredientCount: 2},
  {Id: 2, Label: "Industrial Factory", Order: 4, IngredientCount: 3},
  {Id: 3, Label: "Forge", Order: 5, IngredientCount: 2},
  {Id: 1, Label: "Manufacturer", Order: 6, IngredientCount: 4},
  {Id: 5, Label: "Extractor", Order: 7, IngredientCount: 0}];
var ingredients =
  [{Id: 10, TargetItem: 21, SourceItem: 11, Rate: 60},
  {Id: 11, TargetItem: 17, SourceItem: 15, Rate: 30},
  {Id: 12, TargetItem: 19, SourceItem: 2, Rate: 6},
  {Id: 13, TargetItem: 31, SourceItem: 34, Rate: 30},
  {Id: 14, TargetItem: 16, SourceItem: 12, Rate: 30},
  {Id: 15, TargetItem: 44, SourceItem: 37, Rate: 40},
  {Id: 16, TargetItem: 11, SourceItem: 37, Rate: 40},
  {Id: 17, TargetItem: 35, SourceItem: 25, Rate: 120},
  {Id: 18, TargetItem: 23, SourceItem: 13, Rate: 45},
  {Id: 19, TargetItem: 23, SourceItem: 31, Rate: 15},
  {Id: 2, TargetItem: 3, SourceItem: 22, Rate: 15},
  {Id: 20, TargetItem: 1, SourceItem: 13, Rate: 30},
  {Id: 21, TargetItem: 1, SourceItem: 44, Rate: 20},
  {Id: 22, TargetItem: 39, SourceItem: 7, Rate: 5},
  {Id: 23, TargetItem: 39, SourceItem: 42, Rate: 20},
  {Id: 24, TargetItem: 30, SourceItem: 23, Rate: 20},
  {Id: 25, TargetItem: 30, SourceItem: 15, Rate: 20},
  {Id: 29, TargetItem: 27, SourceItem: 18, Rate: 10},
  {Id: 3, TargetItem: 7, SourceItem: 3, Rate: 30},
  {Id: 30, TargetItem: 27, SourceItem: 42, Rate: 20},
  {Id: 31, TargetItem: 6, SourceItem: 17, Rate: 10},
  {Id: 32, TargetItem: 6, SourceItem: 11, Rate: 20},
  {Id: 33, TargetItem: 20, SourceItem: 13, Rate: 60},
  {Id: 34, TargetItem: 20, SourceItem: 27, Rate: 10},
  {Id: 35, TargetItem: 10, SourceItem: 32, Rate: 1},
  {Id: 36, TargetItem: 10, SourceItem: 38, Rate: 2},
  {Id: 37, TargetItem: 33, SourceItem: 39, Rate: 7.5},
  {Id: 38, TargetItem: 33, SourceItem: 26, Rate: 22.5},
  {Id: 39, TargetItem: 33, SourceItem: 1, Rate: 22.5},
  {Id: 4, TargetItem: 13, SourceItem: 16, Rate: 45},
  {Id: 40, TargetItem: 36, SourceItem: 30, Rate: 3},
  {Id: 41, TargetItem: 36, SourceItem: 43, Rate: 12},
  {Id: 42, TargetItem: 36, SourceItem: 27, Rate: 6},
  {Id: 43, TargetItem: 38, SourceItem: 33, Rate: 2.5},
  {Id: 44, TargetItem: 38, SourceItem: 36, Rate: 2.5},
  {Id: 45, TargetItem: 38, SourceItem: 20, Rate: 5},
  {Id: 46, TargetItem: 14, SourceItem: 24, Rate: 18},
  {Id: 47, TargetItem: 14, SourceItem: 39, Rate: 6},
  {Id: 48, TargetItem: 14, SourceItem: 2, Rate: 24},
  {Id: 49, TargetItem: 15, SourceItem: 22, Rate: 45},
  {Id: 5, TargetItem: 26, SourceItem: 16, Rate: 50},
  {Id: 50, TargetItem: 15, SourceItem: 40, Rate: 45},
  {Id: 51, TargetItem: 41, SourceItem: 15, Rate: 7.5},
  {Id: 52, TargetItem: 41, SourceItem: 34, Rate: 45},
  {Id: 53, TargetItem: 24, SourceItem: 37, Rate: 75},
  {Id: 54, TargetItem: 24, SourceItem: 18, Rate: 7.5},
  {Id: 55, TargetItem: 2, SourceItem: 35, Rate: 24},
  {Id: 56, TargetItem: 2, SourceItem: 15, Rate: 12},
  {Id: 57, TargetItem: 9, SourceItem: 6, Rate: 5},
  {Id: 58, TargetItem: 9, SourceItem: 23, Rate: 20},
  {Id: 59, TargetItem: 9, SourceItem: 21, Rate: 10},
  {Id: 6, TargetItem: 43, SourceItem: 31, Rate: 30},
  {Id: 60, TargetItem: 9, SourceItem: 39, Rate: 5},
  {Id: 61, TargetItem: 29, SourceItem: 43, Rate: 32},
  {Id: 62, TargetItem: 29, SourceItem: 1, Rate: 16},
  {Id: 63, TargetItem: 29, SourceItem: 6, Rate: 8},
  {Id: 64, TargetItem: 29, SourceItem: 19, Rate: 16},
  {Id: 65, TargetItem: 28, SourceItem: 33, Rate: 4},
  {Id: 66, TargetItem: 28, SourceItem: 26, Rate: 16},
  {Id: 67, TargetItem: 28, SourceItem: 29, Rate: 2},
  {Id: 68, TargetItem: 28, SourceItem: 19, Rate: 16},
  {Id: 69, TargetItem: 4, SourceItem: 28, Rate: 4},
  {Id: 7, TargetItem: 42, SourceItem: 31, Rate: 40},
  {Id: 70, TargetItem: 4, SourceItem: 9, Rate: 4},
  {Id: 71, TargetItem: 4, SourceItem: 24, Rate: 48},
  {Id: 72, TargetItem: 4, SourceItem: 13, Rate: 100},
  {Id: 73, TargetItem: 32, SourceItem: 38, Rate: 1.5},
  {Id: 74, TargetItem: 32, SourceItem: 14, Rate: 1.5},
  {Id: 75, TargetItem: 32, SourceItem: 23, Rate: 15},
  {Id: 76, TargetItem: 32, SourceItem: 6, Rate: 15},
  {Id: 77, TargetItem: 46, SourceItem: 11, Rate: 12},
  {Id: 78, TargetItem: 46, SourceItem: 24, Rate: 24},
  {Id: 79, TargetItem: 46, SourceItem: 2, Rate: 24},
  {Id: 8, TargetItem: 18, SourceItem: 41, Rate: 45},
  {Id: 80, TargetItem: 45, SourceItem: 14, Rate: 2},
  {Id: 81, TargetItem: 45, SourceItem: 29, Rate: 4},
  {Id: 82, TargetItem: 45, SourceItem: 36, Rate: 4},
  {Id: 83, TargetItem: 45, SourceItem: 46, Rate: 2},
  {Id: 84, TargetItem: 47, SourceItem: 30, Rate: 4},
  {Id: 85, TargetItem: 47, SourceItem: 14, Rate: 2},
  {Id: 86, TargetItem: 5, SourceItem: 45, Rate: 2},
  {Id: 87, TargetItem: 48, SourceItem: 4, Rate: (8/3)},
  {Id: 88, TargetItem: 48, SourceItem: 10, Rate: (4/3)},
  {Id: 89, TargetItem: 48, SourceItem: 47, Rate: (10/3)},
  {Id: 9, TargetItem: 37, SourceItem: 8, Rate: 40},
  {Id: 90, TargetItem: 48, SourceItem: 5, Rate: (200/3)}];
var sortSettings = {
  id: 0,
  label: 1,
  base: 2,
  building: 3
}

function getItemDetails(itemId){
  return items.find(x => {return x.Id == itemId});
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
    return -1;
  if (item2.Id < item1.Id)
    return 1;
  return 0;
}

function sortItemsByLabel(item1, item2){
  if (item1.Label < item2.Label)
    return -1;
  if (item2.Label < item1.Label)
    return 1;
  return 0;
}

function sortItemsByBase(item1, item2){
  if (item1.Base < item2.Base)
    return -1;
  if (item2.Base < item1.Base)
    return 1;
  return 0;
}

function sortItemsByBuilding(item1, item2){
  var building1 = '';
  var building2 = '';
  for (var i=0; i<buildings.length && (building1 == '' || building2 ==''); i++){
    if (item1.BuildingId == buildings[i].Id)
      building1 = buildings[i].Label;
    if (item2.BuildingId == buildings[i].Id)
      building2 = buildings[i].Label;
  }
  
  if (buildings1 < buildings2)
    return -1;
  if (buildings2 < buildings1)
    return 1;
  return 0;
}

function getItemList(searchKey, sortSetting = 0){
  var list = [...items];
  if (searchKey !== null && searchKey !== ''){
    var regSearchKey = new RegExp(searchKey);
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

export {getItemDetails, generateSummary, sortSettings, getItemList};
