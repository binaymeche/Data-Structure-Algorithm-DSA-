const fruits = ["Apple", "Banana", "Orange", "Mango"];

function findFruit(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(findFruit(fruits, "Mango")); // 3