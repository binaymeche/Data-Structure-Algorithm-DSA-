// const studentData = ["binay", "sonam", "buddhi", "abi", "aarav", "dihpansu"];
// const target = "aarv";

// const findTarget = (studentData, target) => {
//     let founded;
//   for (let i = 0; i < studentData.length; i++) {
//     if (studentData[i] === target) {
//       console.log(`${studentData[i]} is found and index is ${[i]}`);
//       founded = true;
//       break;
//     } 
// }
//     if(!founded){
//         console.log("Invalid Target")
//     }
// };

// findTarget(studentData, target);





// 2.
// const groceries = ['milk','bread','eggs','flour','cheese','sugar'];

// const searchForItem = (items, targetItem) => {
//   for(let i = 0; i<items.length; i++) {
//     if(items[i] === targetItem) {
//       console.log(`found the ${items[i]} in index ${i}`)
//     }
//   }
// }

// searchForItem(groceries, "eggs")





// 3.
// const numbers= [1,2,3,4,5];

// const getElement = (arr, index) => arr[index];

// console.log(getElement(numbers,3))



//4
// const findPair = (arr) => {
  
//   // O(n^2)
//   for(let i=0; i<arr.length; i++){
//     for(let j= i+1; j<arr.length; j++){
//       console.log(`Pair: ${arr[i]}, ${arr[j]}`)
//     }
//   }

//   // O(n)
//   for(let k=0; k<arr.length; k++) {
//     console.log('_________________', k)
//   }

//   // If we combine all the "O" operations it becomes O(n^2 + n)
//   // O(n^2) is a dominant term
//   // "n" is a non-dominant term
//   // So we remove theh "non-dominant" term and we're only left with O(n^2)
//   // This way, we simplify our bigO

// } 
// const nums = [1,2,3,4,5];
// findPair(nums)




// 5

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while(left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if(arr[mid] === target) return mid;

//     if(arr[mid] < target) {
//       left = mid +1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

// const numbers = [1,3,5,7,9,11,13];
// console.log(binarySearch(numbers, 13));