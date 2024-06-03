///Handling Errors with Async/Await:
async function awaitCall(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }
  
  const data = await awaitCall('https://catfact.ninja/fact');
  if (data) {
    
  } else {
    
  }

  //Chaining Async/Await
  async function delay(message, delayInMilliseconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, delayInMilliseconds);
    });
  }
  
  async function chainedAsyncFunctions() {
    await delay('Function 1', 1000);
    await delay('Function 2', 1000);
    await delay('Function 3', 1000);
  }
  
  chainedAsyncFunctions();

////big b
async function awaitCall() {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    console.log(data);
  }
  
  awaitCall();