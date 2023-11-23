/**
 * ALAB 308.2.1 JavaScript: Control Flow:
 This assignment is to develop a simple program that generates recommendations based on a set of input data and several conditions
*/
/**
 * Part 1: Growing Pains
- Create a program that advises a group of environmental scientists how to "handle the growth and spread" of a unique plant species under their supervision.

- Develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
The information given:
The plants are contained in circular area with a radius of 5 meters.
 */
let radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;

console.log(
  "The plants are to be contained in a garden of a circular area of " + area.toFixed(4) + " square meters"
);

//Each plant requires a minimum space of 0.8 square meters.
const minArea = 0.8;

console.log('the minimum plant area is '+minArea+ ' square meter each.\n   ')

// The area is starting with 20 plants.
let plantCount = 20;

//The plants "double" in number every week
let weekNum = 0;
console.log("  After " + weekNum + " week(s):");

// Predicting the plant growth after a specific number of weeks.
plantCount *= 2 ** weekNum;
console.log(`The plants number in week ${weekNum} is ${plantCount} plants`);

//  Implementing control flow to make decisions based on the plant count
let plantArea = minArea * plantCount;
console.log(`The area covered by the plants is ${plantCount}*${minArea} = ${plantArea} square meters`);

//the percentage area covered by the plants
let plantPercentage = (plantArea / area) * 100;
plantPercentage = plantPercentage.toFixed(2);
console.log( "the percentage area covered by the " + plantCount + " plants is " + plantPercentage + "% of the garden area");

//Control Flow:
if (plantPercentage > 80) { // if the growth exceeds 80% of the total capacity:
  console.log(
    `The plants should be Pruned.\n 'The plants cover ${plantPercentage}% of the garden space which exceeds 80% of the maximum capacity'`
  );
} else if (50 <= plantPercentage && plantPercentage <= 80){
  //if growth is betwwen 50 and 80%

  console.log(
    `The plants should be Monitored.\n 'The plants cover ${plantPercentage}% of the garden space (between 50 and 80%'` );

} else { //The growth is bellow 50%

  console.log(`The plants should be "Planted".\n "The plants cover only ${plantPercentage}% of the garden space (Less than 50%)"`);
}

/**
 * After one week 
 */

weekNum++;
console.log("  # After " + weekNum + " week(s):");
// Predict the plant growth after a specific number of weeks as the plants double every week
plantCount *= 2 ** weekNum;
console.log(`The plants number in week ${weekNum} is ${plantCount} plants`);

plantArea = minArea * plantCount;
console.log(`The area covered by the plants is ${plantCount}*${minArea} = ${plantArea} square meters`);

//the percentage area covered by the plants
plantPercentage = (plantArea / area) * 100;
plantPercentage = plantPercentage.toFixed(2);
console.log( "the percentage area covered by the " + plantCount + " plants is " + plantPercentage + "% of the garden area");

//Control Flow:
if (plantPercentage > 80) { // if the growth exceeds 80% of the total capacity:
  console.log(
    `The plants should be Pruned.\n 'The plants cover ${plantPercentage}% of the garden space which exceeds 80% of the maximum capacity'`
  );
} else if (50 <= plantPercentage && plantPercentage <= 80){
  //if growth is betwwen 50 and 80%

  console.log(
    `The plants should be Monitored.\n 'The plants cover ${plantPercentage}% of the garden space (between 50 and 80%'` );

} else { //The growth is bellow 50%

  console.log(`The plants should be "Planted".\n "The plants cover only ${plantPercentage}% of the garden space (Less than 50%)"`);
}

/**
 * After 2 weeks 
 */
weekNum++;
console.log("  ## After " + weekNum + " week(s):");
// Predict the plant growth after a specific number of weeks as the plants double every week
plantCount *= 2 ** weekNum;
console.log(`The plants number in week ${weekNum} is ${plantCount} plants`);

plantArea = minArea * plantCount;
console.log(`The area covered by the plants is ${plantCount}*${minArea} = ${plantArea} square meters`);

//the percentage area covered by the plants
plantPercentage = (plantArea / area) * 100;
plantPercentage = plantPercentage.toFixed(2);
console.log( "the percentage area covered by the " + plantCount + " plants is " + plantPercentage + "% of the garden area");

//Control Flow:
if (plantPercentage > 80) { // if the growth exceeds 80% of the total capacity:
  console.log(
    `The plants should be Pruned.\n 'The plants cover ${plantPercentage}% of the garden space which exceeds 80% of the maximum capacity'`
  );
} else if (50 <= plantPercentage && plantPercentage <= 80){
  //if growth is betwwen 50 and 80%

  console.log(
    `The plants should be Monitored.\n 'The plants cover ${plantPercentage}% of the garden space (between 50 and 80%'` );

} else { //The growth is bellow 50%

  console.log(`The plants should be "Planted".\n "The plants cover only ${plantPercentage}% of the garden space (Less than 50%)"`);
}
/**
 * After 3 weeks 
 */
weekNum++;
console.log("  ### After " + weekNum + " week(s):");
// Predict the plant growth after a specific number of weeks as the plants double every week
plantCount *= 2 ** weekNum;
console.log(`The plants number in week ${weekNum} is ${plantCount} plants`);

plantArea = minArea * plantCount;
console.log(`The area covered by the plants is ${plantCount}*${minArea} = ${plantArea} square meters`);

//the percentage area covered by the plants
plantPercentage = (plantArea / area) * 100;
plantPercentage = plantPercentage.toFixed(2);
console.log( "the percentage area covered by the " + plantCount + " plants is " + plantPercentage + "% of the garden area");

//Control Flow:
if (plantPercentage > 80) { // if the growth exceeds 80% of the total capacity:
  console.log(
    `The plants should be Pruned.\n 'The plants cover ${plantPercentage}% of the garden space which exceeds 80% of the maximum capacity'`
  );
} else if (50 <= plantPercentage && plantPercentage <= 80){
  //if growth is betwwen 50 and 80%

  console.log(
    `The plants should be Monitored.\n 'The plants cover ${plantPercentage}% of the garden space (between 50 and 80%'` );

} else { //The growth is bellow 50%

  console.log(`The plants should be "Planted".\n "The plants cover only ${plantPercentage}% of the garden space (Less than 50%)"`);
}
