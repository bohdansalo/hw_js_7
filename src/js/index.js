// // 1
// const numbers = [1, 2, 3];
// numbers[1] = 10;
// console.log(numbers);
// // 2

// const fruit = ["яблоко", "банан", "персик"];

// fruit[3] = "апельсин";
// console.log(fruit);

// // 3
// const numberArr = [123, 11, 22, 33, 44];
// let sum = 0;

// for (const num of numberArr) {
//   sum += num;
// }

// console.log(sum);
// // 4
// const numberArr = [10, 20, 30, 40, 50];

// for (let i = 0; i < numberArr.length; i++) {
//   console.log(numberArr[i]);
// }
// // 5
// const programLanguage = ["Js", "Python", "pascal", "html", "csharp"];

// for (const languege of programLanguage) {
//   if (languege.length > 5) {
//     console.log(languege);
//   }
// }
// // 6
// const masivNumbers = [55, 44, 23, 33, 80, 51, 874, 330, 600, 5];
// let maxNumber = 0;

// for (const num of masivNumbers) {
//   if (num > maxNumber) {
//     maxNumber = num;
//   }
// }
// console.log(maxNumber);
// // 7
const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

for (const num of numbers) {
  if (num % 2 === 0) {
    console.log(num);
  }
}
