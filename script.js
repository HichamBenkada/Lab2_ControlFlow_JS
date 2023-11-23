/** ALAB 308.2.1 JavaScript: Control Flow:
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

console.log('the minimum plant area is '+minArea+ ' square meter each.\n ')

// The area is starting with 20 plants.
let plantCount = 20;

//The plants "double" in number every week
let weekNum = 0;
console.log("  After " + weekNum + " week(s):");

// Predicting the plant growth after a specific number of weeks.
plantCount *= (2 ** weekNum);
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
    `The plants should be Pruned.\n 'The plants cover ${plantPercentage}% of the garden space which exceeds 80% of the maximum capacity'`);
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
//Area covered by the plant
plantArea = minArea * plantCount;
console.log(`The area covered by the plants is ${plantCount}*${minArea} = ${plantArea} square meters`);

//the percentage area covered by the plants
plantPercentage = (plantArea / area) * 100;
plantPercentage = plantPercentage.toFixed(2);
console.log( "the percentage area covered by the " + plantCount + " plants is " + plantPercentage + "% of the garden area");

//Control Flow:
if (plantPercentage > 80) { // if the growth exceeds 80% of the total capacity:
  console.log(
    `The plants should be Pruned.\n 'The plants cover ${plantPercentage}% of the garden space which exceeds 80% of the maximum capacity'`);
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

// Area of covered by the plants
plantArea = minArea * plantCount;
console.log(`The area covered by the plants is ${plantCount}*${minArea} = ${plantArea} square meters`);

//the percentage area covered by the plants
plantPercentage = (plantArea / area) * 100;
plantPercentage = plantPercentage.toFixed(2);
console.log( "the percentage area covered by the " + plantCount + " plants is " + plantPercentage + "% of the garden area");
//Control Flow:
if (plantPercentage > 80) { // if the growth exceeds 80% of the total capacity:
  console.log(
    `The plants should be Pruned.\n 'The plants cover ${plantPercentage}% of the garden space which exceeds 80% of the maximum capacity'`);
} else if (50 <= plantPercentage && plantPercentage <= 80){
  //if growth is betwwen 50 and 80%
  console.log(
    `The plants should be Monitored.\n 'The plants cover ${plantPercentage}% of the garden space (between 50 and 80%'` );
} else { //The growth is bellow 50%
  console.log(`The plants should be "Planted".\n "The plants cover only ${plantPercentage}% of the garden space (Less than 50%)"`);
}

/**
 * Part 2: Thinking Bigger
 */
console.log("...  Part 2: Thinking Bigger  ...")
// If the scientists were to start with 100 plants and not to be pruned for 10 weeks. What would be the additional space required given that there is multiple gardens with similar area.
plantCount = 100;
console.log('The Scientists decide to start with ' + plantCount + ' plants')
weekNum = 10;
//After 10 weeks the plants would double 10 times...
plantCount = plantCount * (2**weekNum)
console.log('After '+ weekNum +' weeks, the plants grow to '+ plantCount + ' plants.')
// the plant area is: 0.8 * the count of plants
plantArea = minArea * plantCount;
console.log('This plants will cover a total area of ' +plantArea+ ' square metter.')

radius= (plantArea/PI)**(.5)
console.log(`If the space remained circular, the radius of the expanded garden will be: r = ${radius.toFixed(2)} meters.`)

/**
 * Part 3: Errors in Judgement
 */
console.log("...  Part 3: Errors in Judgement  ...")

// Scientists decided not to listen to recommendations and started with 100..
plantCount = 50;
plantArea = minArea * plantCount;
console.log(`The Scientist are obstinate to start with ${plantCount} plants which will cover and area of ${plantArea} square meters`)

//Check point if this exceeds 80% of the garden capacity..
let isPossible= ( plantArea/area <= .8) ? true : false;
try {//check if plants area greater then 80%
    if(isPossible){
        console.log(isPossible + ': Go ahead! Not a problem!' )
    }else{
        throw "Error - STOP 'the plants are exceeding the capacity of the garden'"
    }
} catch (error) {
    console.log(error)
}finally{
    console.log('Thanks!')
}