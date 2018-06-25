// Code your solution in this file
function findMatching(arrayOfNames, person) {
  return arrayOfNames.filter(function(name) { return name.toLowerCase() === person.toLowerCase() })
};

function fuzzyMatch(arrayOfNames, person) {
  const result = arrayOfNames.filter(function(name) {
    if (name.toLowerCase().startsWith(person.toLowerCase())) {
      return name
    }
  })
  return result
};

function matchName(arrayOfNames, person) {
  const result = arrayOfNames.filter(function(element) {
    if(element.name === person) {
      return element
    }
  })
  return result
};
