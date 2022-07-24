//  this arrow function type
// const myDisplay = (sum) =>{
//     document.getElementById('demo').innerHTML = sum ;
// }
// const myCalculator = (num1,num2 ) => {

//     let sum= num1 + num2 ;
//     return sum ;
// }
// let result = myCalculator(5,6)
// myDisplay(result)



// 1. this is asynchronous programming
// callback function use 

// const myDisplay = (sum) => {
//   document.getElementById("demo").innerHTML = sum;
// };
// const myCalculator = (num1, num2, myCallback) => {
//   let sum = num1 + num2;
//   myCallback(sum);
// };
// myCalculator(55, 11, myDisplay);

// 
  
// this is more advance callback function 
 myCalculator = (num1,num2, myDisplay = (sum) => {
    document.getElementById('demo').innerHTML = sum;
 }) => {
    let sum= num1 + num2 
    myDisplay(sum) ;
 }
   myCalculator(10,15)