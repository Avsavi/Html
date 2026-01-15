// set interval example

let count=0;
const intervalId= setInterval(() => {
 count++;
 alert('This alert appears every second!');
 console.log('Interval count: ', count);   
}, 1000);

// to stop the interval after 10 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval cleared after 10 seconds');
}, 10000);