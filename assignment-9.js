// print the array value in an increment and decrement manner.
// print firest elment , 4th position & lest array elements
let arr = [4, 1, 6, 3, 9, 6, 19];

const arrlength = arr.length - 1;

for (let i = 0; i < arrlength; i++) {
  console.log("arr incriment", arr[i]);
}

console.log("+++++++++++++++++++++++++++")

for (let i = arrlength; i > 0; i--) {
  console.log("arr incriment", arr[i]);
}
console.log("+++++++++++++++++++++++++++")

console.log("first", arr[0]);
console.log("mid", arr[3]);
console.log("last", arr[arr.length - 1]);

console.log("+++++++++++++++++++++++++++")
// find the even number from the array

for(let i=0 ; i<arrlength-1 ; i++){
    if(arr[i] % 2 === 0){
        console.log("evev",arr[i]);
    }
}
console.log("+++++++++++++++++++++++++++")
// find the odd  number from the array
for(let i=0 ; i<arrlength-1 ; i++){
    if(arr[i] % 2 != 0){
        console.log("odd",arr[i]);
    }
}
console.log("+++++++++++++++++++++++++++")

for(let i=0 ; i<arrlength-1 ; i++){
    console.log ("sqr",arr[i]*arr[i]);
}