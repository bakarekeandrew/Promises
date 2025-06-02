// const myPromises = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved!");
//     }, 5000);
// }); 

// myPromises.then((result) => {
//     console.log(result);

// })


// Task: Create a promise that randomly resolves or rejects
const getLucky = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      if (success) resolve("You’re lucky!");
      else reject("Unlucky!");
    }, 3000);
  });
  
  getLucky
    .then((msg) => console.log("Good", msg))
    .catch((err) => console.error("Bad", err));
  
