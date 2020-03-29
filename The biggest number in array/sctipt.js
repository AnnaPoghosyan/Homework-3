let arr = []; 
let arrSize = +prompt("Enter array size");
for (let i=0; i < arrSize; i++) {
    arr[i] =+prompt("Enter the number");
}

let biggest = arr[0];
for (let i=0; i < arr.length; i++) {
    if (biggest < arr[i]) {
        biggest = arr[i];
    }
}
console.log(biggest);

