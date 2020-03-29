let arr = [];        
let filteredArr = [];
let arrSize = +prompt("Enter array size");
for (let i=0; i < arrSize; i++) {
    arr[i] =+prompt("Enter the number");
}

for (let i=0; i<arr.length; i++) {
    if(filteredArr.indexOf(arr[i]) === -1) {
        filteredArr.push(arr[i])
    }
}
console.log(filteredArr);
