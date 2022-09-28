const prompt = require("prompt-sync")({ sigint: true });

// while (i < 200) {

//     if (i % 2 === 0 ) {
//         i = i+5}

//     else {
//         i = i+3;
//     }

//     if (i < 200 && (i < 101 || i >=150)) {
//             console.log(i);
//     }

// }
// let a = 0;

// while (a<10) {
//     let i = parseInt(prompt('Enter a Number'));
//     console.log(i);
//  a++
// }

// let j = 0;
// let sum = 0;

// while (j<10) {
//     let i = parseInt(prompt('Enter a Number'));
//     sum = sum+i;
//     j++;
// }

// console.log(sum);

// let j=0;
// let x =0;

// while (j<10) {
//         let i = parseInt(prompt('Enter a Number'));

//  if ( i % 2 ==0) {
//             x = x+1;
//      }
//         j++;
//     }

//     console.log(x);

// let j = 0;
// let sum = 0;
// let x = 0;

// while (j<10) {
//     let i = parseInt(prompt('Enter a Number'));

//     if (i%2==0) {
//         sum = sum+i;
//         x++;
//     }

//     j++;
// }

// console.log(sum/x);

// let j = 0;
// let i = parseInt(prompt('Enter a Number'));
// let x = i;
// while (j<9) {
//     i = parseInt(prompt('Enter a Number'));
//     if (x > i) {
//         x=i;
//     }

//     j++;
// }
// console.log(x);

// let j = 0;
// let i = parseInt(prompt('Enter a Number'));
// let x = i;
// while (j<9) {
//     i = parseInt(prompt('Enter a Number'));
//     if (x < i) {
//         x=i;
//     }

//     j++;
// }
// console.log(x);

// let j = 0;

// let i;
// let x = i+1;

//     while (j<9) {
//         i = parseInt(prompt('Enter a Number'));
//          if (i%2==0 && i >= x) {
//                 x=i;
//             }
//         j++;
//     }
//     console.log(x);

// let i=0;
// let even;

// while (i<10) {
//     i++;
//    let y = parseInt(prompt('Enter a Number'));
//     if (y%2===0) {
//         even = y;
//         break;
//     }

// }
// console.log(i);

// while (i<10) {
//     y = parseInt(prompt('Enter a Number'));
//     if (y%2===0 && y>even) {
//         even = y;
//     }
//     i++;
// }

// console.log(even, i);

// let i = 0;

// while (i<10) {
//     y = parseInt(prompt('Enter a Number'));

//     if (y%3===0 && y%5===0) {
//         // console.log('Number is divisible by 3 and 5');
//         console.log('Number is divisible by 3');
//         console.log('Number is divisible by 5');
//     }

//     else if (y%3===0){
//         console.log('Number is divisible by 3');
//     }

//     else if (y%5===0){
//         console.log('Number is divisible by 5');
//     }

//     else{
//         console.log('Number is not divisible by 3 and 5');
//     }

//     i++;
// }

// while (i<10) {
//         y = parseInt(prompt('Enter a Number'));
//         if (y%3===0 && y%5===0) {
//             console.log('Number is divisible by 3 and 5')
//             if (y%3===0){
//                 console.log('Number is divisible by 3');
//             }
//             console.log('Number is divisible by 5');
//         }
//        else {
//         console.log('Number is not divisible by 3 and 5');
//        }
//         i++;
//     }

// let i = 0;
// while (i<10) {
//     y = parseInt(prompt('Enter a Number'));
//     if (y%3 !=0 && y%5!=0) {
//         console.log('Number is not divisible by 3 and 5');
//     }

//     if (y%3===0) {
//         console.log('Number is divisible by 3');
//     }
//     if (y%5===0) {
//         console.log('Number is divisible by 5');
//     }

// }

// let i = parseInt(prompt('Enter a Number'));
// let j = 2;
// let flag = true;

// while (j<i){

//     if (i%j==0) {
//         flag =false;
//         break;
//     }
//     j++
// }

// if (flag==true) {
//     console.log(i , ' is prime Number');
// }
// else {
//     console.log(i , ' is not prime Number');
// }

// let j = parseInt(prompt('Enter a Number'));

// let a = 0;
// let b = 1;

// let sum = 0;
// console.log(sum);

// while (b < j) {
//     a = b;
//     b = sum;
//     sum = a+b;
//     if (sum<j) {
//         console.log(sum);
//     }
// }
