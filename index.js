// findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

// fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

// matchName - This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.

function findMatching(driversArray, query) {
  // console.log(name)
  return driversArray.filter(function (driver) {return driver.toLowerCase() === query.toLowerCase();});
}

function fuzzyMatch(driversArray, query) {
  return driversArray.filter(function (driver) {
    return driver.toLowerCase().indexOf(query.toLowerCase()) === 0;
  })
}

function matchName(driversArray, query) {
  return driversArray.filter(function (driver) {
    // return driver.name.toLowerCase().indexOf(query.toLowerCase()) === 0; //returns objects whose name fuzzymatches
    return driver.name.toLowerCase() === query.toLowerCase();
  })
}
