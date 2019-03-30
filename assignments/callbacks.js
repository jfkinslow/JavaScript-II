// Create a higher order const and invoke the callback const to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  const firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order const using "cb" as the call back
  const firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // const invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

const logger = (item) => {
  console.log(item);
}


const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, logger);

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1])
}

last(items, logger);

// last(items, function(last){
//   console.log(last);
// });

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(2, 3, logger);

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(2, 3, logger);

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

contains("Notebook", items, logger);

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let seen = {};
  return cb(Array.from(array).filter((item) => {
    return seen.hasOwnProperty(item) ? false: (seen[item] = true);
  }));
}
logger(items);
removeDuplicates(items, logger);
logger(items);