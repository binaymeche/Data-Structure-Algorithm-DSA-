const findPair = (arr) => {

  // O(n²)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]}, ${arr[j]}`);
    }
  }

  // O(n)
  for (let k = 0; k < arr.length; k++) {
    console.log("_________________", k);
  }
};

const nums = [1, 2, 3, 4, 5];
findPair(nums);