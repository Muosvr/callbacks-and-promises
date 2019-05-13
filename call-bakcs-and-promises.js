function myPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("This function is resolved");
    }, 1000)
  })
}

myPromise()
  .then(function (result) {
    console.log(result);
  })
