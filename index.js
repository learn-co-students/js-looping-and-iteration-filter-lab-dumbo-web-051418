// Code your solution in this file
function findMatching(drivers, name) {
  // const result = drivers.filter(name => drivers === name);
    return drivers.filter(function (driver) {
      return driver.toLowerCase() === name.toLowerCase();
    });
  }

function fuzzyMatch(drivers, name) {
  const newArray = [];

  for (let i = 0; i < drivers.length; i++) {
    if (drivers[i].substring(0,2) == name) {
      newArray.push(drivers[i]);
    }
  }
  return newArray;
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
