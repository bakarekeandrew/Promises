// Implement a function that retries a failed async operation up to 3 times with exponential backoff.
async function retryOperation(operation, maxRetries = 3) {
    // Complete this function
    for(let attempts = 1; attempts <= maxRetries; attempts++) {
        try{
            const response =  await operation();
            return response;
        }catch(error){
            if( attempts === maxRetries){
                throw new Error(`Operation failed after ${maxRetries} attempts: ${error.message}`);
            }else{
               console.log(`Attempt ${attempts} failed: ${error.message}. Retrying...`);
               await new Promise(resolve => setTimeout(resolve, 3000 * attempts)); // Exponential backoff
            }
        }
    }
    
}

async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicodee.com/users");
    if (!response.ok) throw new Error("Network error");
    return await response.json();
}

retryOperation(fetchUsers)
    .then(data => console.log("Success:", data))
    .catch(err => console.error("Final error:", err));

