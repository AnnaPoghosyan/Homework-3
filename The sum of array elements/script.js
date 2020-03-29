let arr = [];      
let arrSize = +prompt("Enter array size");
for (let i=0; i < arrSize; i++) {
    arr[i] =+prompt("Enter the number");
}
let sum = 0;
for (let i=0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);