var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  var beg = array
  beg = [element...beg]
  return beg;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var beg = array
  beg = beg.unshift(element)
  return beg;
}
