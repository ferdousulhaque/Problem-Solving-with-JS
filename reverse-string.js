str = "gfecba";

// Basic Array
// Time Complexity O(n)
(function(str){
  let reverse = [];
  for(let i=str.length-1; i>=0; i--){
    reverse.push(str[i]);
  }
  console.log(reverse.join(""));
})(str)

// Recursive Array
// Time Complexity O(2^n)
const recursion = (str, i, result) => {
  // Base Condition
  if(i > 0){
    result.push(str[i]);
    return recursion(str, i - 1, result);
  }

  // Recursion
  result.push(str[0]);
  return result.join("");
}
console.log(recursion(str, str.length, []))

// JS Built In Function
// Time Complexity O(n)
function builtin(string){
  return string.split('').reverse().join('');
}
console.log(builtin(str));

// ES6 Arrow Function
const builtinArrow = str => console.log(str.split('').reverse().join(''));
builtinArrow(str);