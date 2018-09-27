var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({ prop: 1 }, { [key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  prop: 1, prop: 2[key] = value
  return obj
}
