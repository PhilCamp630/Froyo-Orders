const flavorsObject = {};

const flavorArray = prompt("Enter your flavors");
console.log(flavorArray);

const splitFlavorArray = flavorArray.split(",");
console.log(splitFlavorArray);

for (const flavor of splitFlavorArray) {
  flavorsObject[flavor] += 1;
  console.log(flavorsObject)
}


/** 
for(const i = 0; i < splitFlavorArray.length; i++){
    const flavor = splitFlavorArray[i]
  console.log(flavor);

// }
// */
// console.log("BEFORE:", flavorsObject);
// flavorsObject["flavor"] = 1
// console.log("AFTER:", flavorsObject);

// flavorsObject.flavor += 1
// console.log("flavor key value", flavorsObject.flavor);
// //same as 
// //flavorsObject.burgers = flavorsObject.burgers + 1
// console.log("AFTER INCREMENT:", flavorsObject);

// count = [];
