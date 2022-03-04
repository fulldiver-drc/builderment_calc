const items = [];
var buildings = [];
var ingredients = [];

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

export {items, buildings, ingredients, getItemDetails, generateSummary};
