// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function kingdom() {
  console.log("Hello from Kingdom");

  function westfall() {
    console.log("Hello from westfall");

    function greenfeld() {
      console.log("Hello from greenfeld");
    }

    greenfeld();

  }

  function skyrim() {
    console.log("Hello from skyrim");

    function orangeGrove() {
      console.log("Hello from Orange Grove");
    }

    orangeGrove();
  }

  westfall();
  skyrim();

}
kingdom();



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  var counter = 0;
  return function () {counter += 1; return counter}
};
let newCounter = counter();
// Example usage: const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  var counter = 0;
  return {increment: () => {
    counter += 1;
    return counter;
  }, decrement: () => {
    counter -= 1;
    return counter;
  }};
};

let newCounterFactory = counterFactory();
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
