//  this is written through call back

// runDirection(100,"Top",function(){
//    runDirection(200,"Left",function(){
//       runDirection(300,"Bottom",function(){
//          runDirection(400,"Right",function(){

//          })
//       })
//    })
// })

// Promises
// this is written by Promises

// runDirection(100, "top")
//   .then(() => runDirection(200, "Left"))
//   .then(() => runDirection(300, "Bottom"))
//   .then(() => runDirection(400, "Right"));

// promises used when asynchoronus call
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("It worked");
  } else {
    reject("It got rejected");
  }
});
promise
  .then((result) => result + "?") // it worked?
  .then((reslut2) => reslut2 + "*") // it worked?*
  .then((result3) => {
    throw Error; // it is for example
    console.log(result3);
  })
  .catch(() => console.log("error in result 3!"));

// Async await

async function move() {
  // returns a promise
  await runDirection(100, "Top"); // wait for the promise
  await runDirection(200, "Left");
  await runDirection(300, "Bottom");
  await runDirection(400, "Right");
}

async function print() {
  return 6;
}
print();

