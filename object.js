//dynamicly add key and values
// const thisObject = {};
// const thisKey = "Name";
// const thisValue = "Mayank";

// thisObject[thisKey] = thisValue;
// console.log(thisObject);

//Object destructure
const userInfo = { Name: "Mayank", age: 20, college: "SDJ" };
const { college } = userInfo;
console.log(college);

// //for each object
const user = {
  username: "Ashok",
  age: 20,
  occupation: "Web Developer",
};

const user2 = ["Kushal", 20, "Web Developer"];

const userNew = { ...user, username: "Karan" };
console.log(userNew);

//Object.value

// console.log(Object.values(user));

//object.key
// console.log(Object.keys(user));

//for each array
const user3 = [1, 3, 4, 5, 7, 9];
// user3.forEach((item) => {
//   console.log(item);
// });

//object.entries
console.log(Object.entries("Entries ", user2));

//array.filter

const filterMethord = user3.filter((user3) => user3 >= 5);
console.log("filter", filterMethord);

//array.map
const numbers = [1, 2, 3, 4];

const mapMethord = numbers.map((number) => number * 2);
console.log("map ", mapMethord);

//array.reduce
const prices = [50, 62, 150, 22];
const total = prices.reduce(sum);
console.log("reduce methord, total is ", total);
function sum(pre, next) {
  return pre + next;
}
