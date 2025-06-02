const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5);
    }, 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});

promise1.then((value1) => {
    return promise2.then((value2) => {
        return value1 + value2;
    });
}).then((result) => {
    console.log(`The sum of two number is:${result.toString()}`);
}).catch((error) => {
    console.error(error);
});