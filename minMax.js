//Array of integers

// function minMaxSum(arr) {
//   let max = arr[0];
//   let min = arr[0];
//   let sum = 0;

//   for (let i = 0; i < 5; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//     sum += arr[i];
//   }
//   let maxSum = sum - min;
//   let minSum = sum - max;
//   console.log(minSum + " " + maxSum);
// }
// function minMaxSum(arr) {
//     let sortarr = arr.sort();
//     let maxSum = 0;
//     let minSum = 0;
//     for (let i=0 ; i < arr.length - 1; i++ ){
//         minSum += sortarr[i];
//     }
//     for (let j=arr.length - 1; j > 0; j-- ){
//         maxSum += sortarr[j];
//     }
//     console.log(minSum + ' ' + maxSum);
// }

let arr = [1, 3, 5, 7, 9];
            // 1=3+5+7+9=24
            // 3=1+5+7+9=22
            // 5=1+3+7+9=20
            // 7=1+3+5+9=18
            // 9=1+3+5+7=16
function minMaxSum(arr) {
  // Reduce Function of to help to get sums of four of the five integers.
  const  sum = arr.reduce((acc, curr) => acc + curr);
  //console.log(sum)
  // Minimum
  const min = sum - Math.max(...arr); //1 3 5 7 9 
  //console.log(...arr)
  const max = sum - Math.min(...arr);

//   console.log(`Minimum number is ${min}`);
//   console.log(`Maximum number is ${max}`);
}
// Memoization - saving and reusing previously computed
// values of a function rather than recomputing them

minMaxSum(arr);

// function minMaxSum(arr) {
//   const sum = arr.reduce((acc,curr) => acc + curr);
//   const maxVal = Math.max(...arr);
// //   console.log(arr);
//   const minVal = Math.min(...arr);
//   //console.log(sum);
  
//   console.log(sum - maxVal);
//   console.log(sum - minVal);
// }

// minMaxSum(arr);







     

    






