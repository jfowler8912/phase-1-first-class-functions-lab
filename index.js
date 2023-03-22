// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
return array.slice(0,2)
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function (array) {
return array.slice(2,4)
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
console.log(selectingDrivers)

function createFareMultiplier(multiplier) {
return function (value) {
    return multiplier * value
}
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (array, func){
  return func(array)
}
