// let arr1 = [10, 15, 20, 25];
// let arr2 = [30, 33, 42, 55];

// let combined = arr1.concat(arr2);

// let even = [];
// let odd = [];

// let evenSum = 0;
// let oddSum = 0;

// for (let num of combined) {
//   if (num % 2 === 0) {
//     even.push(num);
//     evenSum += num;
//   } else {
//     odd.push(num);
//     oddSum += num;
//   }
// }

// console.log("Even numbers:", even);
// console.log("Odd numbers:", odd);
// console.log("Sum of even numbers:", evenSum);
// console.log("Sum of odd numbers:", oddSum);

// console.log("Start");

// setTimeout(() => {
//   console.log("First");
// }, 3000);
// for(var i=1;i<=50000;i++) {
//   console.log("i");
// }
// setTimeout(() => {
//   console.log("Second");
// }, 2000);

function sum(val, callback) {
  callback(val+5)
}

function sub(val, callback) {
  callback(val-3)
}

function mul(val, callback) {
  callback(val*2)
}

function div(val, callback) {
  callback(val/4)
}

sum(10, (sumResult) => {
  sub(sumResult, (subResult) => {
    mul(subResult, (mulResult) => {
      div(mulResult, (divResult) => {
        console.log("Div:", divResult);
      });
    });
  });
});

