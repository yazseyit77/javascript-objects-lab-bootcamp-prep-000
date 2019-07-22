var recipes = {
  salad: "tomato"
};

function updateObjectWithKeyAndValue(object, key, value){
  return object.key = value;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
