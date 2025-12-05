//q1
// const input1 = [-2, 5, 3, -8, 10, -4, 7];

// const filters = numbers.filters(numbers > 0);
// function run(numbers) {
//   let sum = 0;
//   if (numbers > 0) {
//     sum += numbers;
//   }
// }
// run();

//q2
// const input2 = ["hello", "world", "javascript", "coding"];
// const final = input2.map((Str) => Str.length);
// console.log(final);

//q3
// const input3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const outt = input3.filter((number) => number % 3 === 0);
// console.log(outt);

//q4
// const input4 = [8547, 12345, 9856, 11254, 7856, 10999, 7856];
// let step = [];
// const filters = input4.filter((nest) => nest > 10000);
// console.log(JSON.parse(JSON.stringify(filters)));
// console.log(typeof filters);

//q5
// Expected output: [{name: 'Book', price: 20}, {name: 'Pen', price: 5}, {name: 'Notebook', price: 15}]

// const input5 = [
//   { name: "Book", price: 20 },
//   { name: "Pen", price: 5 },
//   { name: "Laptop", price: 800 },
//   { name: "Notebook", price: 15 },
// ];
// function check(products, priceMax) {
//   return products.filter((product) => product.price < priceMax);
// }
// const priceUnder50 = check(input5, 50);
// console.log(priceUnder50);

//q6
//Given an array of objects representing students, calculate the average age of students for each grade
// Expected output: { '9th': 14.5, '10th': 15.5, '11th': 16 }
const input6 = [
  { name: "John", age: 15, grade: "10th" },
  { name: "Jane", age: 16, grade: "10th" },
  { name: "Tom", age: 15, grade: "9th" },
  { name: "Mary", age: 14, grade: "9th" },
  { name: "Bob", age: 16, grade: "11th" },
];

let getGrade = input6;

for (let i = 0; i < getGrade.length; i++) {
  if (getGrade[i].grade == "10th") {
    let averageGrade = 0;
    averageGrade = averageGrade + getGrade[i].age;

    console.log(averageGrade);
  }
}

//split
let a = "lets play bro".split(" ");
console.log(a);

//solid squar
// for (let i = 1; i < 6; i++) {
//   let row = "";
//   for (let j = 1; j < 6; j++) {
//     row += "*";
//   }
//   console.log(row);
// }
