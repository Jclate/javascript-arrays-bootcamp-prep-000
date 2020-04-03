var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  var beg = [element,...array]
  return beg;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var cat = element
  cat = cat.unshift(array);
  return cat;
}

function addElementToEndOfArray(array, element) {
  var beg = array
  var neg = element
  beg = [...beg, neg]
  return beg;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var beg = array;
  var neg = element;
  beg = beg.push(neg);
  return beg;
}

function accessElementInArray(array, index) {
  var amount = array
  var number = index
  return array[number];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array = array.shift
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
