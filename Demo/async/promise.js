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

doSomethingAsync(1000, true).then(
  function onSuccess(data) {
    console.log(data);
  },
  function onError(error) {
    console.error('failed', error);
  }
);

doSomethingAsync(1000)
  .then((data) => {
    console.log('success', data);
  })
  .catch((error) => {
    console.error('failure', error);
  });

doSomethingAsync(1000)
  .then((data) => {
    console.log(data);
    return doSomethingAsync(1000, false);
  })
  .then((data) => {
    console.log(data);
    return doSomethingAsync(1000);
  })
  .then((data) => {
    console.log(data);
    return doSomethingAsync(1000);
  })
  .catch((error) => console.error('WHOOPS', error));

const p1 = doSomethingAsync(100);
const p2 = doSomethingAsync(300);
const p3 = doSomethingAsync(1000);

const arr = [p1, p2, p3];

Promise.all(arr)
  .then((values) => {
    console.log(values);
  })
  .catch((error) => console.error('ALL ERROR', error));

Promise.race(arr).then((value) => {
  console.log('RACE: ', value);
});

Promise.allSettled([
  doSomethingAsync(100),
  doSomethingAsync(300, false),
  doSomethingAsync(1000, false),
]).then((values) => {
  console.log(values);
});

function doSomethingElseAsync(success = true) {
  if (success) {
    return Promise.resolve(3);
  } else {
    return Promise.reject(3);
  }
}

doSomethingElseAsync().then((v) => console.log('SOFORT:', v));
