// Code your solution in this file
function findMatching(drivers, condition) {
  return drivers.filter(driver => driver.toLowerCase() === condition.toLowerCase());
}

function fuzzyMatch(drivers, condition) {
  return drivers.filter(driver => driver.startsWith(condition) === true);
}

function matchName(drivers, condition) {
  return drivers.filter(driver => driver.name === condition);

}
