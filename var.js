{
  var value = "hello";
}

function printingVar() {
  console.log("function=== ", value);
}

printingVar();

{
  const DemoValue = "This is Example of scope";
  function printingValue() {
    console.log("function==== ", DemoValue);
  }
}

printingValue();

for (let i = 0; i < 4; i++) {
  console.log("The value is =", i);
}

function modifi() {
  console.log("` ");
}

//console.log('The value is =', i)
const data = "hello";

// {
//   //set timeOut in for loop
//   for (var i = 0; i < 4; i++) {
//     setTimeout(() => {
//       console.log("Now you'r value is =", i);
//     }, 6600);
//   }
// }
{
  //re-assign let & var
  let a = 1;
  a = 1000;
  console.log("re-assign let & var = ", a);
}
a = 500;
console.log(a);

{
  //re-declare only var
  var b = 1;
  var b = 1000;
  console.log("re-declare only var = ", b);
}

{
  //re-assign the const array via indexing
  const numbers = [1, 2, 3];
  numbers[0] = 10;
  console.log("re-assign the const array via indexing = ", numbers);
}

{
  //call back function
  let alpha = "INIT";

  console.log(alpha);
}

{
  function calculate(array, callback) {
    for (let i = 0; i < 6; i++) {
      console.log("We provide this company Laptop v");
      callback(array[i]);
      ś;
    }
  }
  function logItem(item) {
    console.log("laptop are == ", item);
  }
  const items = ["ASUS", "acer", "HP", "Lenovo", "DELL", "Mac"];

  calculate(items, logItem);
}

{
  function personInfo(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "Indian";
  }
  const person = {
    firstName: "Mayank",
    lastName: "Sharma",
    age: "20",
    eyeColor: "Brown",
  };
  personInfo(person);
}
