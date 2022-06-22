// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(arrayOfDrivers) 
  { return arrayOfDrivers.slice(0, 2)
  };
   
  const returnLastTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(arrayOfDrivers.length - 2);
  }
  
  const selectingDrivers = (() => [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
  ])();

const createFareMultiplier = (fare) => () => fare * fare;


const fareDoubler = function(fare) {
     return fare * 2;
}


const fareTripler = function(fare) {
    return fare * 3;
}

const selectDifferentDrivers = function (arrayOfDrivers, firstOrLastDriversFunction)  {
    return firstOrLastDriversFunction(arrayOfDrivers);
  }