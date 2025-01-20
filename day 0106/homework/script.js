
// ### 1. **Create a basic Promise that resolves immediately**
//   - Task: Use the `Promise` constructor to create a promise that resolves with the message `"Hello, Promise!"`.

const promise1 = new Promise((resolve, reject) => {
    resolve("Hello, Promise!");
});

promise1
    .then((result) => console.log(result));

// ### 2. **Create a Promise that rejects with an error**
//   - Task: Write a promise that rejects with the message `"Something went wrong!"` and handle the rejection with `.catch()`.

const promise2 = new Promise((resolve, reject) => {
    reject("Something went wrong!");
})

promise2
    .catch((error) => console.log(error));

// ### 3. **Use `setTimeout` to resolve a Promise after 2 seconds**
//   - Task: Create a promise that waits for 2 seconds using `setTimeout` and then resolves with `"2 seconds have passed"`.

setTimeout(() => {
    const promise = new Promise((resolve, reject) => {
        resolve("2 seconds have passed")
    });
    
    promise
        .then((result) => console.log(result));
}, 2000)

// ### 4. **Handle both resolve and reject outcomes**
//   - Task: Write a promise that randomly either resolves with `"Success!"` or rejects with `"Failed!"` using `Math.random()`.
// Handle both outcomes with `.then()` and `.catch()`.

const bool = Math.round(Math.random()) === 1? true : false;
    
const promise = new Promise((resolve, reject) => {
    if(bool) {
        resolve("Success!")
    } else {
        reject("Failed!")
    }
});
    
promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// ### 5. **Create a chain of promises using `.then()`**
//   - Task: Create a promise that resolves with the number `5`.
// Chain multiple `.then()` calls to multiply the number by `2` in each step.

const promise3 = new Promise((resolve, reject) => {
    resolve(5);
});

promise3
    .then((result) => {
        console.log(result);
        return result * 2;
    })
    .then((result) => {
        console.log(result);
        return result * 2;
    })
    .then((result) => {
        console.log(result);
        return result * 2;
    })
    .then((result) => {
        console.log(result);
        return result * 2;
    });

// ### 6. **Simulate a network request using Promises**
//   - Task: Create a promise that resolves with `"Data fetched!"` after 1 second. Use `setTimeout` to simulate the delay.

setTimeout(() => {
    const promise = new Promise((resolve, reject) => {
        resolve("Data fetched!");
    });
    
    promise
        .then((result) => console.log(result));
}, 1000);