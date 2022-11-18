function callback(value) {
  const result = value + 5;
  console.log(result);
}

function doSomething(cb) {
  setTimeout(() => {
    const result = 1 + 2;
    cb(result);
  }, 1000);
}

doSomething(callback);

// pyramid of doom aka callback hell
/*doSomething(() => {
  doSomething(() => {
    doSomething(() => {
      // weitermachen
    })
  })
})*/
