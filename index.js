// Code your solution in this file

function findMatching(collection, string) {
  return collection.filter(function(driver){
   return driver.toLowerCase() === string.toLowerCase()
  })
}


function fuzzyMatch(collection, string){
  return collection.filter(function(driver){
    return driver.split("")[0] === string.split("")[0]
  })
  
}

function matchName(collection, string){
  return collection.filter(function(driver){
    return driver.name.toLowerCase() === string.toLowerCase()
  })
  
}
