var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  var beg = array
  var neg = element
  beg = [neg,...beg]
  return beg;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var beg = array;
  var neg = element;
  beg = beg.unshift(neg);
  return beg;
}
