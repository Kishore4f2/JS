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

// function sum(val, callback) {
//   callback(val+5)
// }

// function sub(val, callback) {
//   callback(val-3)
// }

// function mul(val, callback) {
//   callback(val*2)
// }

// function div(val, callback) {
//   callback(val/4)
// }

// sum(10, (sumResult) => {
//   sub(sumResult, (subResult) => {
//     mul(subResult, (mulResult) => {
//       div(mulResult, (divResult) => {
//         console.log("Div:", divResult);
//       });
//     });
//   });
// });


// function orderPlaced(orderID, callback) {
//     callback(`Order Id ${orderID} Placed Succesfully`);
// }
// function shipped(orderID, callback) {
//     callback(`Order ID ${orderID} Shipped Successfully`);
// }
// function dispatch(orderID, callback) {
//     callback(`Order ID ${orderID} Dispatched Successfully`);
// }
// function deliver(orderID, callback) {
//     callback(`Order ID ${orderID} Delivered Successfully`);
// }

// orderPlaced(25634,(placed)=>{
//     console.log(placed);
//     shipped(36524, (shippeed)=> {
//         console.log(shippeed);
//         dispatch(63524, (disp) => {
//             console.log(disp);
//             deliver(536412,(delivered)=> {
//                 console.log(delivered);
//             });
//         });
//     });
// });

function orderPlaced(orderID) {
    return new Promise((resolve) => {
        resolve(`Order ID ${orderID} Placed Successfully`);
    });
}

function shipped(orderID) {
    return new Promise((resolve) => {
        resolve(`Order ID ${orderID} Shipped Successfully`);
    });
}

function dispatch(orderID) {
    return new Promise((resolve) => {
        resolve(`Order ID ${orderID} Dispatched Successfully`);
    });
}

function deliver(orderID) {
    return new Promise((resolve) => {
        resolve(`Order ID ${orderID} Delivered Successfully`);
    });
}

// orderPlaced(25634)
//     .then((placed) => {
//         console.log(placed);
//         return shipped(36524);
//     })
//     .then((shippedMsg) => {
//         console.log(shippedMsg);
//         return dispatch(63524);
//     })
//     .then((dispatchMsg) => {
//         console.log(dispatchMsg);
//         return deliver(536412);
//     })
//     .then((deliveredMsg) => {
//         console.log(deliveredMsg);
//     });

orderPlaced(1234).then((placed)=> {
    console.log(placed);
    shipped(1234).then((shipped)=> {
        console.log(shipped);
        dispatch(1234).then((dispatched)=> {
            console.log(dispatched);
            deliver(1234).then((delivered)=> {
                console.log(delivered);
            });
        });
    });
});
