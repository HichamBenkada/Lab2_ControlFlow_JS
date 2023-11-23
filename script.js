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

console.log('The plants are contained in circular area of '+ area.toFixed(4) + ' square meters')

//Each plant requires a minimum space of 0.8 square meters.
let plantArea = 0.8;
// The area is starting with 20 plants.
let plantCount = 20; 
//The plants double in number every week
let weekNum = 2;
plantCount *= (2 ** weekNum);

// Predict the plant growth after a specific number of weeks.

console.log(`The plants number in week ${weekNum} is ${plantCount} plants`);

//  Implementing control flow to make decisions based on the plant count

plantArea = plantArea * plantCount;

console.log(`The area covered by ${plantCount} plants is ${plantArea} square meters`)

plantPercentage = plantArea/area *100;

// if the plants growth after the given of weeks exceed 80% of the maximum capacity of the garden, the plants should be Pruned.
if (plantPercentage > 80){
    console.log(`The plants should be Pruned, because the plants cover ${plantPercentage.toFixed(2)} of the garden space which exceeds 80% of the maximum capacity`)
} else {
    
}

