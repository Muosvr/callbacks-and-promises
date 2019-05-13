var result = undefined;

// Not using callbacks
function add(a, b, sum) {
  sum = a + b;
}

setTimeout(() => add(2, 3, result), 1000);

console.log("Synchronous result", result);
console.log("Runing some code here");

// Using callbacks
function addWithCallBack(a, b, callback) {
  sum = a + b;
  callback(sum);
};

function printResult(value) {
  console.log("Callback result", value);
}

setTimeout(() => addWithCallBack(2, 3, printResult), 100);
setTimeout(() => addWithCallBack(5, 7, printResult), 0);

console.log("Running some more code");