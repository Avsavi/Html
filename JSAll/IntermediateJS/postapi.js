// postapi is used ti get the data from the server using fetch method
// const data={
//         "title": "user foo",
//         "body": "user bar",
//         "userId": 1,
//         "id": 101
//       };
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     headers:{
//         "Content-type":"application/json; charset=UTF-8"
//     },
//     body:JSON.stringify( data
//         // title:"foo",
//         // body:"bar",
//         // userId:1,
//     )
// })
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log("unable to load data:",error));

// const data ={
//     username: "Avinash shinge",
//     city : "pune",
//     country : "India",
//     mobilenumber:9561041238
// }
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     headers:{
//         "Content-type":"application/json; charset=UTF-8"
//     },
//     body:JSON.stringify(data)
// })
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log("unable to load data:",error));

//error handling in fetch api

fetch("https://jsonplaceholder.typicode.com/postss",)
    .then
    (response=>{
        if(!response.ok){
            throw new Error(`Network responses was not ok : ${response.status}`);
        }
        return response.json();
    })
    .then(data=>console.log(data))
    .catch(error=>console.log("There has been a problem with your fetch operation:",error));    
