var minE = function(x) {
  let space
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (x[i] < x[j]) {
        space = x[i]
        x[i] = x[j]
        x[j] = space
      }
    }
  }
  
  return x[0]
}

var massiv = [1, 3, 5, 2, 4]

console.log(minE(massiv))
