function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 1500);
    });
  }
  
  async function loadData() {
    const result = await fetchData();
    console.log("Alright", result);
  }
  
  loadData();

  
  