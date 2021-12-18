//using iterative
function findIndexOfFibonacciByIteration(n){
  if(n === 0){
    return 0;
  }
  else if(n === 1 || n === 2){
    return 1;
  } else {
    let last = [0, 1, 1];
    for(let i=2; i<n; i++){
      last.push(last[i-1]+last[i]);
    }
    return last[n];
  }
}


//using recursion
function findIndexOfFibonacciByRecursion(n){
  if(n < 2){
    return n;
  }

  return findIndexOfFibonacciByRecursion(n-1) + findIndexOfFibonacciByRecursion(n-2);
}


console.log(findIndexOfFibonacciByIteration(21));
console.log(findIndexOfFibonacciByRecursion(21));