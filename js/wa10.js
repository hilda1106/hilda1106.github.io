// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname'); //where you enter your name
const randomize = document.querySelector('.randomize'); //randomize the story when the button is clicked
const story = document.querySelector('.story'); // where the random stories are held

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random]; //returns the random story that is pulled
}

// 2. RAW TEXT STRINGS

let storyText = "It was 120 fahrenheit outside, so :insertx: went for a swim in the local pool. On the way :insertx: picked up some :inserty: to snack while in the pool. One hour later,  :insertx: picked up the  :insertz: next to the pool to take home. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

let insertX = ["Big Bear Ben", "Mike the Moose", "Danny the Dear"]

const insertY = ["pho", "sushi", "burritos"]

const insertZ = ["umbrella", "towel", "bike"]

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
let newStory = storyText;
let xItem = randomValueFromArray(insertX); 
let yItem = randomValueFromArray(insertY); 
let zItem = randomValueFromArray(insertZ); 
newStory = newStory.replaceAll(':insertx:',xItem); 
newStory = newStory.replaceAll(':inserty:',yItem); 
newStory = newStory.replaceAll(':insertz:',zItem);  //this is a method

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name); 

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone';
    const temperature =  Math.round(94 - 32 * 5/9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds' , weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}

