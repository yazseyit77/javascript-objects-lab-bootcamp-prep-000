var recipes = {
  salad: "tomato"
};

function updateObjectWithKeyAndValue(object, key, value){
  object.key = value;
  return object;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
