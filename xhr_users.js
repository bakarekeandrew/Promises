// 1. Get and Display All User Names Using XHR
// Fetch all users and print their names using XMLHttpRequest

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200){
    const users = JSON.parse(xhr.responseText);
    console.log("User names:")
    users.forEach(user => console.log(user.name));
    
  }
  
}
xhr.send();