let firstArr = [];    
let secondArr = [];   
let thirdArr = [];   
let firstArrSize = +prompt("Enter first array size");

for (let i=0; i < firstArrSize; i++) {
    firstArr[i] =+prompt("Enter the number");
} 

let secondArrSize = +prompt("Enter second array size");
for (let i=0; i < secondArrSize; i++) {
    secondArr[i] =+prompt("Enter the number");
}
let thirdArrSize = firstArrSize + secondArrSize;

 for (let i=0; i < thirdArrSize; i++) {
    if (i < firstArr.length) {
        thirdArr.push(firstArr[i])
    } else {thirdArr.push(secondArr[i-firstArr.length])}

}
console.log(thirdArr);