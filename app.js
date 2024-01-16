console.log("Working");

// // logs a string to the console to tell the user the function was called
// function notifyUser() {
//   console.log("notifyUser function was called!");
// }

// // accepts a function as an argument to run when it has done it's work
// function myAwesomeFunction(notifyUserCallback) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete. I will notify the user");
//   noyifyUserCallback();
// }

// // run the awesome function, and pass the notifyUser function to it
// myAwesomeFunction(notifyUser);
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );
  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, divide);
console.log(result); // Output: 3

const result2 = myCalculatorFunction(2, 3, subtract);
console.log(result2); // Output: 6

// add the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); // Output: 9
