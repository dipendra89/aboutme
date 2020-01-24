
'use strict';

var person = prompt('Hi, please enter your name.');
if (person != null) {
  alert('Hello ' + person + '! Welcome to my page. I have some quiz questions for you to see if you really know me.');
  console.log('Welcome');
}

// Lets see if you really love me or not
var correct = 0;

function First() {
var likesSeattleWeather = prompt('Do you think I like Seattle weather? Please respond with yes/no or y/n');
console.log('Do you think I like Seattle weather?');

while ((likesSeattleWeather === '') || (likesSeattleWeather === null)) {
    likesSeattleWeather = prompt('Please, enter your response in correct format. Either yes/no or y/n');
}

if ((likesSeattleWeather.toLowerCase() === 'yes') || (likesSeattleWeather.toLowerCase() === 'y')) {
    alert('Ohhhh, sorry! Wrong Answer, I hate to say this but I like Colorado weather better');
} 
else if ((likesSeattleWeather.toLowerCase() === 'no') || (likesSeattleWeather.toLowerCase() === 'n')) {
    alert('You got it right!! You know what, lets not be sad though.');
    correct++;
}
else {
    alert('Please, enter your response in correct format. Either yes/no or y/n. It is not case sensative by the way.');
}
}
First();


function Second() {
var haveCat = prompt('Another question now. Do I have a cat in my house? Please respond with yes/no or y/n');

while ((haveCat === '') || (haveCat === null)) {
    haveCat = prompt('Please, enter your response in correct format. Either yes/no or y/n');
}
if ((haveCat.toLowerCase() === 'yes') || (haveCat.toLowerCase() === 'y')) {
    alert('Nahhh, I do not. I used to have one long time ago though.');
} 

else if ((haveCat.toLowerCase() === 'no') || (haveCat.toLowerCase() === 'n')) {
    alert('You really do know me well, hunh!! It is okay, we can be friends');
    correct++;
}

else {
    alert('Please, enter your response in correct format. Either yes/no or y/n. It is not case sensative by the way.');
}
}
Second();


function Third() {
var educationCost = prompt('OK next one. Do I believe attending college is expensive?');

while ((educationCost === '') || (educationCost === null)) {
    educationCost = prompt('Please, enter your response in correct format. Either yes/no or y/n');
}
if ((educationCost.toLowerCase() === 'yes') || (educationCost.toLowerCase() === 'y')) {
    alert('YUP, it is. I wish I was a millionaire.');
    correct++;
} 

else if ((educationCost.toLowerCase() ==='no') || (educationCost.toLowerCase() === 'n')) {
    alert('Nooooo!! Wrong!');
}

else {
    alert('Please, enter your response in correct format. Either yes/no or y/n. It is not case sensative by the way.');
}
}
Third();


function Fourth() {
var watchGameOfThrones = prompt('Did I watch all seasons (from season 1 to season 8) of Game of Thrones? Please respond with yes/no or y/n');

while ((watchGameOfThrones === '') || (watchGameOfThrones === null)) {
    watchGameOfThrones = prompt('Please, enter your response in correct format. Either yes/no or y/n');
}
if ((watchGameOfThrones.toLowerCase() === 'yes') || (watchGameOfThrones.toLowerCase() ===  'y')) {
    alert('Nope, I missed first couple seasons!! I did not miss the last season though');
    correct++;
} 
else if ((watchGameOfThrones.toLowerCase() ==='no') || (watchGameOfThrones.toLowerCase() === 'n')) {
    alert('You are right, I missed first couple seasons!');
}
else {
    alert('Please, enter your response in correct format. Either yes/no or y/n. It is not case sensative by the way.');
}
}
Fourth();



function Fifth() {
var numberOneFan = prompt('Okay, you are doing good. Almost there. Am I a fan of Star Wars Movies?');

while ((numberOneFan === '') || (numberOneFan === null)) {
    numberOneFan = prompt('Please, enter your response in correct format. Either yes/no or y/n');
}
if ((numberOneFan.toLowerCase() === 'yes') || (numberOneFan.toLowerCase() ===  'y')) {
    alert('I hate to say it again, but I am not a big fan of Star Wars Movies. Yeah, I know.');
} 

else if ((numberOneFan.toLowerCase() ==='no') || (numberOneFan.toLowerCase() === 'n')) {
    alert('YAY, you got the correct answer, finally. Just kidding!!');
    correct++;
}

else {
    alert('Please, enter your response in correct format. Either yes/no or y/n. It is not case sensative by the way.');
}
}
Fifth();


// Sixth Question

function Sixth() {
    for (var i = 0; i < 4; i++) {
  
      var sixthQ = prompt('Guess a number between 1 and 15!');
      var int = 9;
  
      if (sixthQ == 6) {
        alert('Great job, how did you know that ' + person);
        correct++;
        console.log('YUP');
      }
  
      else if (sixthQ < 6) {
        alert('Too Low')
        console.log('Too Low');
      }
  
      else if (sixthQ > 6) {
        alert('Too High');
      }
  
    }
  
    if (sixthQ != 6) {
      alert('The answer is 6!');
    }
  }
  Sixth();

// Seventh Question

function Seventh() {

    for (var j = 0; j < 6; j++) {
  
      var seventhQ = prompt('What are all the Make of cars I owned?');
      var cars = ['honda', 'toyota', 'nissan'];
  
      if (seventhQ.toLowerCase() === cars[0] || seventhQ.toLowerCase() ===  cars[1] || seventhQ.toLowerCase() === cars[2]) {
        alert('You are right!!');
        correct++;
        console.log('correct answer');
      }  
      else {
      alert('Nope, try again'); 
    }
}
}
  Seventh();
  
  
alert('Your total number of correct vanswer is : ' + correct + '. Thank you ' + person + ' for playing a game with me!');
console.log('Game Over');

