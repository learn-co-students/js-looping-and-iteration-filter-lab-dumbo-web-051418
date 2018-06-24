// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driver) { return driver.toUpperCase() === name.toUpperCase(); });
}

function fuzzyMatch(drivers, beginningName) {
  return drivers.filter(function (driver) { return driver.slice(0, beginningName.length) === beginningName;});
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) { return driver.name === name; } );
}
