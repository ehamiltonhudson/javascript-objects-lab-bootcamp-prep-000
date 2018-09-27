var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({ prop: 1}, { [key]: value} )
}
