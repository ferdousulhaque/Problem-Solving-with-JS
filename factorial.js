
function factorialUsingIteration(value){
  let multiple = 1;
  if(value < 3){
    return value;
  }
  for(let i = value; i > 1; i--){
    multiple *= i;
  }
  return multiple;
}

// Time Complexity O(n)

function factorialUsingRecursion(value){
  // Escape case
  if(value < 2){
    return 1;
  }
  
  // Loop
  return value * factorialUsingRecursion(value-1);
}

// Time Complexity O(n)

let value = 5;

// 120
console.log(factorialUsingIteration(value));

// 120
console.log(factorialUsingRecursion(value));