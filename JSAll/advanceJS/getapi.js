// get api data using fetch used in advance js for learning purpose
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log('getting error', error));

// another example to get user data
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log('getting error', error));

// // example to get comments data
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log('getting error', error));

// // example to get albums data
// fetch('https://jsonplaceholder.typicode.com/albums')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log('getting error', error));
// // example to get photos data
// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(response=>response.json())

// .then(data=>console.log(data))
// .catch(error=>console.log('getting error', error));
// // example to get todos data
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log('getting error', error));
