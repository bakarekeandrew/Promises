// Fix this callback-based function to use Promises instead:
function getData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John' };
        callback(null, data);
    }, 1000);
}

const getDatapromise = (resolve) => {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            const error = false; // Simulate no error
            if(error) {
                reject(new Error("Failed to fetch data"));
            }
            else{
                const data = { id: 1, name: 'John' };
                resolve(data);
            };
        }, 1000);

            
    })
}

getDatapromise().then((data) => {
    console.log("data received:", data);
})
getDatapromise().catch((error) => {
    console.log("Error:", error.message);
})