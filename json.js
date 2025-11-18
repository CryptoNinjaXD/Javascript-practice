// const userName = ["kunal", "aman", "kamal", "ajay"];
// const users = '{"name":"kunal","age":23,"working": true}';

// const jsonString = JSON.stringify(userName);
// console.log(jsonString);
// console.log(users);

// const parsedData = JSON.parse(users);
// console.log(parsedData);

// function run(num) {
//   if (num === 0) {
//     console.log("End!!");
//     return;
//   } else {
//     console.log("Running!!");
//   }
//   run(num - 1);
// }
// run(6);

// //shallowCopy
// let newObj = {
//   sname: "Harsh",
//   subjects: ["english", "maths", "science"],
// };

//spread operator
// let copyObj = { ...newObj };
// console.log(copyObj);

// newObj.sname = "karan";
// console.log(newObj);

let cars = {
  model: "i10",
  color: ["gray", "black", "red"],
  ghear: "manual"
};
function deepCloneRecursive(src) {
    
    if (src === null || typeof src !== 'object') {
        return src;
    }