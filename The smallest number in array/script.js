let arr = [];  
let arrSize = +prompt("Enter array size");
for (let i=0; i < arrSize; i++) {
    arr[i] =+prompt("Enter the number");
}

let smallest = arr[0];
for (let i=0; i < arr.length; i++) {
    if (smallest > arr[i]) {
        smallest = arr[i];
    }
}
console.log(smallest);