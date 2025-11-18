const ValueString = "this is string";
const ValueNumbers = "this is number";
const ValueFloat = "this is float";
const NullValue = undefined
const ValueBoolean = true

console.log(ValueString, typeof ValueString)
console.log(ValueNumbers, typeof ValueNumbers)
console.log(NullValue, typeof NullValue)
console.log(ValueFloat, typeof ValueFloat)
console.log(ValueBoolean, typeof ValueBoolean)

if(ValueFloat == ValueNumbers){
    console.log("equal")
}else{
    console.log("Not equal")
}

let Num1 = 50;
let Num2 = 50;


if(Num1 == Num2){
    console.log(Num1,' & ',Num2,'equal')
}else{
    console.log(Num1,' & ',Num2,'Not equal')
}

const demoObject = {}
const demoSecondObject = {}

if(demoObject === demoSecondObject){
    console.log(demoObject, demoSecondObject,'Both are equal')
}else{
    console.log(demoObject, demoSecondObject,'Both are not equal')

}