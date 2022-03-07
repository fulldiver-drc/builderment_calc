const items =
  [{Id: 4, Label: "Atomic Locator", Base: 2, Building: "Manufacturer", Complexity: 94},
  {Id: 9, Label: "Electron Microscope", Base: 2.5, Building: "Manufacturer", Complexity: 26},
  {Id: 28, Label: "Supercomputer", Base: 2, Building: "Manufacturer", Complexity: 55},
  {Id: 29, Label: "Turbocharger", Base: 4, Building: "Manufacturer", Complexity: 26},
  {Id: 32, Label: "Magnetic Field Generator", Base: 1.5, Building: "Manufacturer", Complexity: 95},
  {Id: 45, Label: "Matter Compressor", Base: 2, Building: "Manufacturer", Complexity: 93},
  {Id: 48, Label: "Matter Duplicator", Base: (2/3), Building: "Manufacturer", Complexity: 312},
  {Id: 14, Label: "Industrial Frame", Base: 3, Building: "Industrial Factory", Complexity: 23},
  {Id: 33, Label: "Computer", Base: 7.5, Building: "Industrial Factory", Complexity: 18},
  {Id: 36, Label: "Electric Motor", Base: 3, Building: "Industrial Factory", Complexity: 24},
  {Id: 38, Label: "Stabilizer", Base: 2.5, Building: "Industrial Factory", Complexity: 57},
  {Id: 46, Label: "Tank", Base: 6, Building: "Industrial Factory", Complexity: 19},
  {Id: 2, Label: "Tungsten Carbide", Base: 12, Building: "Forge", Complexity: 6},
  {Id: 15, Label: "Graphite", Base: 15, Building: "Forge", Complexity: 3},
  {Id: 24, Label: "Concrete", Base: 7.5, Building: "Forge", Complexity: 9},
  {Id: 41, Label: "Steel", Base: 7.5, Building: "Forge", Complexity: 5},
  {Id: 11, Label: "Glass", Base: 10, Building: "Furnace", Complexity: 3},
  {Id: 16, Label: "Copper Ingot", Base: 30, Building: "Furnace", Complexity: 2},
  {Id: 31, Label: "Iron Ingot", Base: 30, Building: "Furnace", Complexity: 2},
  {Id: 35, Label: "Tungsten Ore", Base: 24, Building: "Furnace", Complexity: 2},
  {Id: 44, Label: "Silicon", Base: 20, Building: "Furnace", Complexity: 3},
  {Id: 8, Label: "Stone", Base: 7.5, Building: "Extractor", Complexity: 1},
  {Id: 12, Label: "Copper Ore", Base: 7.5, Building: "Extractor", Complexity: 1},
  {Id: 22, Label: "Wood", Base: 7.5, Building: "Extractor", Complexity: 1},
  {Id: 25, Label: "Wolframite", Base: 7.5, Building: "Extractor", Complexity: 1},
  {Id: 34, Label: "Iron Ore", Base: 7.5, Building: "Extractor", Complexity: 1},
  {Id: 40, Label: "Coal", Base: 7.5, Building: "Extractor", Complexity: 1},
  {Id: 3, Label: "Wood Plank", Base: 15, Building: "Workshop", Complexity: 2},
  {Id: 5, Label: "Particle Glue", Base: 20, Building: "Workshop", Complexity: 94},
  {Id: 7, Label: "Wood Frame", Base: 7.5, Building: "Workshop", Complexity: 3},
  {Id: 13, Label: "Copper Wire", Base: 30, Building: "Workshop", Complexity: 3},
  {Id: 17, Label: "Carbon Fiber", Base: 7.5, Building: "Workshop", Complexity: 4},
  {Id: 18, Label: "Steel Rod", Base: 15, Building: "Workshop", Complexity: 6},
  {Id: 19, Label: "Coupler", Base: 6, Building: "Workshop", Complexity: 7},
  {Id: 21, Label: "Condenser Lens", Base: 20, Building: "Workshop", Complexity: 4},
  {Id: 26, Label: "Heat Sink", Base: 10, Building: "Workshop", Complexity: 3},
  {Id: 37, Label: "Sand", Base: 40, Building: "Workshop", Complexity: 2},
  {Id: 42, Label: "Iron Plating", Base: 20, Building: "Workshop", Complexity: 3},
  {Id: 43, Label: "Iron Gear", Base: 15, Building: "Workshop", Complexity: 3},
  {Id: 1, Label: "Logic Circuit", Base: 10, Building: "Machine Shop", Complexity: 7},
  {Id: 6, Label: "Nano Wire", Base: 5, Building: "Machine Shop", Complexity: 8},
  {Id: 10, Label: "Quantum Entangler", Base: 1, Building: "Machine Shop", Complexity: 144},
  {Id: 20, Label: "Gyroscope", Base: 5, Building: "Machine Shop", Complexity: 14},
  {Id: 23, Label: "Electromagnet", Base: 7.5, Building: "Machine Shop", Complexity: 6},
  {Id: 27, Label: "Rotor", Base: 10, Building: "Machine Shop", Complexity: 10},
  {Id: 30, Label: "Battery", Base: 2.5, Building: "Machine Shop", Complexity: 10},
  {Id: 39, Label: "Metal Frame", Base: 5, Building: "Machine Shop", Complexity: 7},
  {Id: 47, Label: "Energy Cube", Base: 2, Building: "Machine Shop", Complexity: 34}];

const ingredients =
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

const sortSettings = {
  id: 0,
  label: 1,
  base: 2,
  building: 3
}

function getItemDetails(itemId){
  return items.find(x => {return x.Id == itemId});
}

function getSubRecipes(recipe, tier = 0){
  recipe.Tier = tier;
  var temp = ingredients.filter(x => {return x.TargetItem == recipe.Id;});
  var subRecipes = temp.map(x => {
    var obj = {};
    obj.Id = x.SourceItem;
    obj.Rate = x.Rate;
    return obj;
  });
  
  subRecipes.forEach(x => {
    var item = items.find(y => { return x.Id == y.Id; });
    x.Parent = recipe;
    x.Base = item.Base;
    x.Label = item.Label;
    x.Building = item.Building;
    x.Complexity = item.Complexity;
    x.SubRecipes = getSubRecipes(x, tier+1);
  });
  
  return subRecipes;
}

function multiplyInefficientSummary(inefficientList){
  if (!inefficientList)
    return;
  inefficientList.forEach(x => {
    x.Rate *= x.Multiplier;
    x.SubRecipes.forEach(y => {
      y.Multiplier = Math.ceil((x.Rate/y.Base) / 0.5) * 0.5;
      multiplyInefficientSummary(y.SubRecipes);
    });
  });
}

function generateInefficientSummary(recipeList){
  recipeList.forEach(recipe => {
    recipe.Id = recipe.itemId;
    recipe.Multiplier = recipe.multiplier;
    recipe.Rate = getItemDetails(recipe.Id).Base;
    delete recipe.itemId;
    delete recipe.multiplier;
    recipe.SubRecipes = getSubRecipes(recipe);
  });
  return recipeList;
}

function generateEfficientSummary(inefficientRate){
}

function generateSummary(recipeList){
  var ret = {};
  ret.Inefficient = generateInefficientSummary(recipeList);
  ret.Efficient = generateEfficientSummary(ret.Inefficient);
  multiplyInefficientSummary(ret.Inefficient);
  return ret;
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
