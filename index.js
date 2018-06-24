// Code your solution in this file
function findMatching(arr, name){
  const newArr = [];
  for(const nome of arr){
    if(name.toLowerCase() === nome.toLowerCase()){
      newArr.push(nome);
    }
  }
  return newArr;
}

function fuzzyMatch(arr, name){
  const newArr = [];
  for(const nome of arr){
    if(name.toLowerCase() === nome.slice(0, name.length).toLowerCase()){
      newArr.push(nome);
    }
  }
  return newArr;
}

function matchName(arr, name){
  const newArr = [];
  for(const nome of arr){
    if(name.toLowerCase() === nome.name.toLowerCase()){
      newArr.push(nome);
    }
  }
  return newArr;
}
