// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(name) {return name.toUpperCase() === string.toUpperCase(); });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(name) {return name.startsWith(string) })
}

function matchName(drivers, name) {
  // const arr = []
  // for (const driver of drivers) {
  //   if (driver.name === name) {
  //     arr.push(driver)
  //   }
  // }
  // return arr
  return drivers.filter(function(dName) {return dName.name === name})
}
//
// return drivers.filter(function(dName) {return dName.name === name})
