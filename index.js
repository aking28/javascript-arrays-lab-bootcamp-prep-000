const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(thing){
  kittens.push(thing);
  return kittens

}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens
}


function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens
}



var kittens = ["Milo","Otis", "Garfield"]

function appendKitten(name){
  var newkittens = [...kittens,name]
  return newkittens

}

function prependKitten(name){
  var newkittens = [name,...kittens]
  return newkittens
}

var kittens = ["Milo","Otis", "Garfield"]

function removeLastKitten(name){
  var newkittens = [kittens,(-1)]
  return newkittens.slice(-1)
}
