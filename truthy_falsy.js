const demoString = "Welcome";
if (demoString) {
  console.log("Not empty ");
} else {
  console.log("Falsy");
}

const demoEmptyString = "";
if (demoEmptyString) {
  console.log("Not empty ");
} else {
  console.log("Falsy");
}

const demoEmptyString1 = "-1";
if (demoEmptyString1) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

const demoEmptyString2 = 0;
if (demoEmptyString2) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
