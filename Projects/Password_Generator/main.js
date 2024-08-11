// atleast 8 length password
// atleast 2 small letters
// atleast 2 capital letters
// atleast 2 numbers 
// atleast 2 special characters 

// Special Characters (32–47 / 58–64 / 91–96 / 123–126)

let range = [{min: 32, max: 47}, {min: 58, max: 64}, {min: 91, max: 96}, {min: 123, max: 126}];



let length = Math.floor(Math.random()*13) + 8;
// let length = 8;
let small1 = Math.floor(Math.random()*26) + 97;
let small2 = Math.floor(Math.random()*26) + 97;
let cap1 = Math.floor(Math.random()*26) + 65;
let cap2 = Math.floor(Math.random()*26) + 65;
let num1 = Math.floor(Math.random()*10) + 0;
let num2 = Math.floor(Math.random()*10) + 0;


let rangeIndexForSpchar1 = Math.floor(Math.random()*4) + 0;
let spchar1 = Math.floor(Math.random() * (range[rangeIndexForSpchar1].max - range[rangeIndexForSpchar1].min + 1)) + range[rangeIndexForSpchar1].min;

let rangeIndexForSpchar2 = Math.floor(Math.random()*4) + 0;
let spchar2 = Math.floor(Math.random() * (range[rangeIndexForSpchar2].max - range[rangeIndexForSpchar2].min + 1)) + range[rangeIndexForSpchar2].min;

let constraintChars = [small1, small2, cap1, cap2, num1, num2, spchar1, spchar2];
for (let index = 0; index < 8; index++) {
    constraintChars[index] = String.fromCharCode(constraintChars[index]);
}

let password = new String();


let positions = [];
for (let index = 0; index < length; index++) {
    positions[index] = index;
}

let k  = length;


for (let index = 0; index < 8; index++) {
    let rand = Math.floor(Math.random()*(k)) + 0;
    let stringIndex = positions[rand];
    password[stringIndex] = constraintChars[index];
    k--;
    positions.splice(rand, 1);
    
}

k = length-8;
let overFlowChars = [];
for (let index = 0; index < length-8; index++) {
    overFlowChars[index] = String.fromCharCode(Math.floor(Math.random()*128) + 0);
    let rand = Math.floor(Math.random()*(k)) + 0;
    let stringIndex = positions[rand];
    password[stringIndex] = overFlowChars[index];
    k--;
    positions.splice(rand, 1);
}

let ans = "";
for (let index = 0; index < length; index++) {
    ans = ans + password[index];
}

console.log(`Generated Password: ${ans}`);
console.log(`Time of creation: ${new Date().toDateString()}`);
