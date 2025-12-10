const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Operation successful!");
    } else {
      reject(new Error("Operation failed!"));
    }
  }, 1000);
});

function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Data has been successfully fetched!");
      } else {
        reject("Error: Could not fetch data.");
      }
    }, 1000);
  });
}

console.log("Starting data fetch...");

fetchDataFromServer()
  .then((message) => {
    console.log("Success! Received message:", message);
  })
  .catch((error) => {
    console.error("Failure! Error details:", error);
  })
  .finally(() => {
    console.log("Fetch attempt finished.");
  });

const nPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Working !!");
    resolve();
  }, 3000);
});

nPromise.then(function () {
  console.log("Async task here !!");
});

// Promise.allSettled
// Promise.race

// const p1 = Promise.resolve(3)
// const p2 = 11
// const p3 = new Promise(())
