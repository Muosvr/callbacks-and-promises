// Calculate 1 + 2 using 
var result = undefined;

function add(a, b, sum) {
  sum = a + b
}

// Simulating a server AJAX call
setTimeout(() => add(2, 3, result), 1000);

console.log("Synchronous result:", result);

// Using call backs
function addWithCallBack(a, b, sum, callback) {
  sum = a + b;
  callback(sum);
}

function printResult(result) {
  console.log("Callback result:", result)
}

setTimeout(() => addWithCallBack(2, 3, result, printResult), 1000)


// Using promise
//.then
function addWithPromise(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(a + b)
    }, 1000)
  })
}

// .then in promise
addWithPromise(2, 3)
  .then((reply) => {
    console.log("Using promise .then:", reply)
  })

// using await in async function using promise
async function getResult() {
  return
}
