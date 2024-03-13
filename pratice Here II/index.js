const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is first  promise");
    }, 5000)
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is promise 2");
    }, 4000)
});

Promise.race([promise1, promise2]).then(value => {
    console.log(value)
})