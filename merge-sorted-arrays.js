let array_1 = [10, 7, 20, 50];
let array_2 = [50, 20, 100, 10, 1];
let array_3 = [1000, 200, 500, 5, 3];

function mergeSortedArray(...arr){

  let mergedArray = [];
  arr.forEach(ar => { //O(n^2)
    ar.forEach(a => {
      mergedArray.push(a);
    });
  });
  return mergedArray.sort((a, b) => a-b); //O(n)
} //Time Complexity O(n^2)

console.log(mergeSortedArray(array_1, array_2, array_3));


// Built in Function
function builtin(...arr){
  return [].concat(...arr).sort((a, b) => a-b);
}

console.log(builtin(array_1, array_2, array_3));

// ES6 Arrow Function
const smartMergedSortArray = (...arr) => [].concat(...arr).sort((a, b) => a-b);

console.log(smartMergedSortArray(array_1, array_2, array_3));