// const car = {

//     color:"red",
//     model:'URUS_7',
//     isAutomatic:true,
// }
// this is default style writing
// const color= car.color
// const model = car.model
// const isAutomatic= car.isAutomatic ;

// this is destructuring
// const {color,model,isAutomatic} = car ;
// console.log(color,model,isAutomatic) ;

// we can pass the car value through function also

// function printValue({color,model,isAutomatic}){
//     console.log(color,model,isAutomatic)
// }
// printValue(car)

// // Template string

// const age = 23;
// const name = "lipan";
// // const str = "Hi my name is " + name + " and i am " + age + " years old";

// // this is template string
// const str = `Hi my name is ${name} and i am ${age} years old`
// console.log(str);

// Function type

// 1. normal function
//  function add (a,b){
//     return a+b
//  }

// 2. obj function
//   const add = function (a,b){
//     return  a+b
//   }

// 3. Arrow Function
// const add = (a,b) =>{
//    return a+b
// }
// console.log(add(2,5));

// map in array
// const normalArray = [1,2,3,4];
//2 3 4 5

// const mapArray = normalArray.map((num)=>{
//     return num+1;
// })
// console.log(mapArray);

// forEach loop in array
// const normalArray = [1,2,3,4];
// const double=[]
// normalArray.forEach((num)=>{
//  double.push(num+1)
// }) ;

//  console.log(double);

// filter in js
// const normalArray = [1, 2, 3, 4, 5, 6, 7];
// const filterArray = normalArray.filter((num) => {
//   return num > 2 && num < 7;
// });

// console.log(filterArray);

// reduce in js 
// const normalArray = [1, 2, 3, 4, 5, 6 ];
// const reduceArray = normalArray.reduce((accumulator,num)=>{
//     return accumulator + num ; //accumulator = accumulator + num // 1 3 6 10 15 21 //dry run
// }, 0 ) ; // <- initialize 

// console.log(reduceArray);
