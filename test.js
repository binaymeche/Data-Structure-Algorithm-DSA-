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
const groceries = ['milk','bread','eggs','flour','cheese','sugar'];

const searchForItem = (items, targetItem) => {
  for(item of items) {
    if(item === targetItem){
      console.log(`Item founded ${targetItem}`)
    }
    // console.log(items);
  }
}

searchForItem(groceries, "flour")

