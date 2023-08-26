// find the max number in array
// find the min number is array
// print how many numbe in array
// print the value of index number 4
// find sum and multiply of all array element

arr = [4, 1, 6, 9, 2, 7, 20, 55];
arrLength = arr.length - 1;
// print the value of index number 4

console.log("4th position", arr[3]);
console.log("+++++++++++++++++++++++++++");

// find sum and multiply of all array element
sum = 0;
for (i = 0; i < arrLength; i++) {}
sum = sum + arr[i];
console.log("sum", sum);
console.log("+++++++++++++++++++++++++++");
mul = 1;
for (i = 0; i < arrLength; i++) {
  mul = mul * arr[i];
}
console.log("multiply", mul);
// print how many numbe in arra
console.log('array length', arrLength);

// find the min number is array
newarr = arr.sort((a, b) => a - b);

console.log( newarr);

console.log("min",newarr[0]);
console.log("max",newarr[newarr.length-1]);