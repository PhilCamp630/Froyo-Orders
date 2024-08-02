const flavorsObject = {};

const flavorArray = prompt("Enter your flavors");
console.log(flavorArray);

const splitFlavorArray = flavorArray.split(",");
console.log(splitFlavorArray);

// Lopping through the split of the prompt
for (const flavor of splitFlavorArray) { // flavor = vanilla
 
  // If flavor does NOT exist in object add it to the flavorsObject
  if(flavorsObject[flavor] === undefined){ // flavorsObject["vanilla"]
    flavorsObject[flavor] = 1; // initialized flavors with 1
    // If flavor DOES exist in object increment that flavor by 1
  } else if (flavorsObject[flavor] !== undefined) {
    flavorsObject[flavor] += 1;
    // flavorsObject[flavor] = flavorsObject[flavor] + 1
  }
  console.log(flavorsObject)
}



// for(const i = 0; i < splitFlavorArray.length; i++){
//     const flavor = splitFlavorArray[i]
//   console.log(flavor);
// }


// console.log("BEFORE:", flavorsObject);
// flavorsObject["flavor"] = 1
// console.log("AFTER:", flavorsObject);

// flavorsObject.flavor += 1
// console.log("flavor key value", flavorsObject.flavor);
// //same as 
// //flavorsObject.burgers = flavorsObject.burgers + 1
// console.log("AFTER INCREMENT:", flavorsObject);

// count = [];
