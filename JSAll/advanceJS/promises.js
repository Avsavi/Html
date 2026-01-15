// promises in the asynch await promise are used to handle asynchronous operations in JavaScript. A promise represents a value that may be available now, in the future, or never. It allows you to write cleaner and more manageable code when dealing with operations that take time to complete, such as fetching data from an API or reading files.

// Example Promises

// let myPromise = new Promise((resolve, reject) => {
//   let success = true; // Simulating success or failure
//   if (success) {
//     resolve("Operation was successful!");
//   } else {
//     reject("Operation failed.");
//   } 
// });

// myPromise.then((message) => {
//   console.log(message); // Output: Operation was successful!
// }).catch((error) => {
//   console.error(error);
// });

//example of promidse chaining

let promiseChain = new Promise((resolve, reject) => {
    let sucess=false;
      if(sucess){
          resolve("Promise chaining successful"); 
      }
      else{
          reject("promise chaining failed");
      }
  }
  );
  promiseChain.then((message)=>{
      console.log(message);
      // return "Next step in the chain";
  }
  ).catch((error)=>{
      console.error(error);
  }).finally(()=>{
      console.log("Promise chain completed");
  }   
  );
  
  //exmaple 3 promise
  
  let fetchData = new Promise((resolve, reject) => {
    let dataFetched = true; // Simulating data fetch success or failure
    if (dataFetched) {
      resolve({ id: 1, name: "John Doe" });
    } else {
      reject("Failed to fetch data.");
    }
  }   
  );
  fetchData.then((data)=>{
      console.log("Data fetched:", data);
  }).catch((error)=>{
      console.error(error);
  }).finally(()=>{
      console.log("Fetch attempt completed");
  });

  // example 4 promise all with set timeout

    let promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 1 resolved");
        }, 2000);
    }   
    );
    let promise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 2 resolved");
        }, 3000);
    }   
    );
    Promise.all([promise1, promise2]).then((messages)=>{
        console.log(messages); // Output after 3 seconds: ["Promise 1 resolved", "Promise 2 resolved"]
    }).catch((error)=>{
        console.error("Error in Promise.all:", error);
    }).finally(()=>{
        console.log("Promise.all operation completed");
    }
    );