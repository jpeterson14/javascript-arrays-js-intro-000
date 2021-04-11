var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array,element) {
   return [...element, array]
   
}
destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element)
  return array
}

addElementToEndOfArray = (array, element) => {
  [array, ...element]
   return array
}
destructivelyAddElementToEndOfArray = (array, element) => {
   array.push(element)
   return array
}