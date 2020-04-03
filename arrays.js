var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  var beg = [element,...array]
  return beg;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  array = [...array, element]
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array;
}

function accessElementInArray(array, index) {
  var amount = array
  var number = index
  return array[number];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(1)
  return array
}

function removeElementFromBeginningOfArray(array) {
  var cats = array
  var mats = cats.slice(1)
  return cats;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var cats = array
  cats = cats.pop()
  return cats;
}

function removeElementFromEndOfArray(array) {
  var cats = array
  cats = cats.slice(0, cats.length - 1)
}
