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
const input4 = [8547, 12345, 9856, 11254, 7856, 10999, 7856];
let step = [];
const filters = input4.filter((nest) => nest > 10000);
console.log(JSON.parse(JSON.stringify(filters)));
console.log(typeof filters);
//solid squar
// for (let i = 1; i < 6; i++) {
//   let row = "";
//   for (let j = 1; j < 6; j++) {
//     row += "*";
//   }
//   console.log(row);
// }
