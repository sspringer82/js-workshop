function doSomethingAsync(timeout, success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = 1 + 2;
      if (success) {
        resolve(result);
      } else {
        reject(result);
      }
    }, timeout);
  });
}

// toplevel await - wartet
const value = await doSomethingAsync(1000);
console.log(value);

// async/await function - wartet nicht bzw. nur intern
async function handleAsync() {
  try {
    const value = await doSomethingAsync(1000, false);
    console.log(value);
  } catch (e) {
    console.error(e);
  }
}
handleAsync();

async function myAsyncFunction() {
  return 42;
}

const endResult = await myAsyncFunction()
  .then((result) => {
    console.log(result);
    return myAsyncFunction();
  })
  .then((v) => {
    console.log(v);
    return myAsyncFunction();
  });
console.log(endResult);

const values = await Promise.all([myAsyncFunction(), myAsyncFunction()]);
console.log('await all', values);
