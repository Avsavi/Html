// why we use asynch
/*Prevent Freezing: In a browser, if a synchronous request takes 10 seconds, the whole webpage freezes. Async prevents this.
Efficiency: It allows for concurrent operations—such as sending multiple requests to a server at the same time.
Real-time Interaction: It is essential for handling user input (clicks, keyboard) while background processes (like loading data) are running. */

// Example of Async Await

// async function fetchData() {    
//     let dataFetched = true; // Simulating data fetch success or failure 
//     if (dataFetched) {        
//         return { id: 1, name: "John Doe" };    
//     } else {        
//         throw new Error("Failed to fetch data.");    
//     }
// }
// fetchData().then((data) => {
//     console.log("Data fetched:", data);
// }).catch((error) => {   
//     console.error(error);
// }
// ).finally(() => {    
//     console.log("Fetch attempt completed");
// });

// example with try and catch block

// async function getUserData() {
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         let data = await response.json();
//         console.log("User Data:", data);
//     }
//     catch(error){
//         console.error("Error fetching user data:", error);
//     }   
// finally{
//         console.log("getUserData operation completed");
//     }
// }
// getUserData();

// exmple with multiple awaits

async function fetchMultipleData() {
    try{
        let response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data1 = await response1.json();
        console.log("Data 1:", data1);

        let response2 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
        let data2 = await response2.json();
        console.log("Data 2:", data2);
    }
    catch(error){
        console.error("Error fetching multiple data:", error);
    }   
finally{
        console.log("fetchMultipleData operation completed");
    }
}
fetchMultipleData();

// by using the set timeout 

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}   
async function delayedMessage() {
    console.log("Message will be displayed after 2 seconds...");
    await delay(2000);
    console.log("This message is displayed after a 2-second delay.");
}
delayedMessage();
