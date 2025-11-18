let arr1 = [10, 15, 20, 25];
let arr2 = [30, 33, 42, 55];

let combined = arr1.concat(arr2);

let even = [];
let odd = [];

let evenSum = 0;
let oddSum = 0;

for (let num of combined) {
  if (num % 2 === 0) {
    even.push(num);
    evenSum += num;
  } else {
    odd.push(num);
    oddSum += num;
  }
}

console.log("Even numbers:", even);
console.log("Odd numbers:", odd);
console.log("Sum of even numbers:", evenSum);
console.log("Sum of odd numbers:", oddSum);