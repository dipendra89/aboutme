// Asking user his/her name and giving back a simple greeting!!


var person = prompt("Hi, please enter your name.");
if (person != null) {
  alert('Hello ' + person + '! Welcome to my page. I hope you do not mind some fun quiz questions I have created!!');
}



// List of 5 simple and fun yes/no questions

'use strict'
console.log('Heyyyyyyyyyy')

var likesSeattleWeather = prompt('Do you like Seattle weather? Please respond with yes/no or y/n');

if (likesSeattleWeather.toLowerCase() === 'yes' || likesSeattleWeather.toLowerCase() === 'y') {
    // toLowerCase() is built in Method
    alert('Okay, I guess you have never been to Colorado then!');
} 

else if (likesSeattleWeather === 'no' || likesSeattleWeather.toLowerCase() === 'n') {
    alert('I feel you, but lets try to look at the bright side.');
}

else {
    alert('Please, enter your response in correct format. Either yes/no or y/n. It is not case sensative by the way.');
}

var haveDog = prompt('Do you have dog? Please respond with yes/no or y/n');

if ((haveDog.toLowerCase() === 'yes') || haveDog.toLowerCase() === 'y') {
    // toLowerCase() is built in Method
    alert('YAY, I do too. They are so cute.');
} 

else if ((haveDog.toLowerCase() === 'no') || haveDog.toLowerCase() === 'n') {
    alert('Really, you probably never had one then, just saying. I do not mean to be rude though.');
}

else {
    alert('Please, enter your response in correct format. Either yes/no or y/n. It is not case sensative by the way.');
}


var educationCost = prompt('Do you beleive that attending college is expensive? Please respond with yes/no or y/n');

if ((educationCost.toLowerCase() === 'yes') || educationCost.toLowerCase() === 'y') {
    // toLowerCase() is built in Method
    alert('I know right. I wish either me or my parents were billionaire.');
} 

else if ((educationCost ==='no') || educationCost.toLowerCase() === 'n') {
    alert('Seriously, you are a crazy human being if you are a human being or you must be a drug dealer. Just kidding.');
}

else {
    alert('Please, enter your response in correct format. Either yes/no or y/n. It is not case sensative by the way.');
}


var watchGameOfThrones = prompt('Did you watch the last season of Game of Thrones? Please respond with yes/no or y/n');

if ((watchGameOfThrones.toLowerCase() === 'yes') || watchGameOfThrones.toLowerCase() ===  'y') {
   //  toLowerCase() is built in Method
    alert('OMG, I felt like the whole America was watching the season.');
} 

else if ((watchGameOfThrones ==='no') || watchGameOfThrones.toLowerCase() === 'n') {
    alert('Did not you have cable in your house? Not judging though.');

}

else {
    alert('Please, enter your response in correct format. Either yes/no or y/n. It is not case sensative by the way.');
}


var numberOneFan = prompt('Do you think that our intructor, Mr. Roger is a "Number 1 Fan" of Star Wars Movies? Please respond with yes/no or y/n');

if ((numberOneFan.toLowerCase() === 'yes') || numberOneFan.toLowerCase() ===  'y') {
    // toLowerCase() is built in Method
    alert('Oh yes, I have no doubt. Mr Roger loves Star Wars movies.');
} 

else if ((numberOneFan ==='no') || numberOneFan.toLowerCase() === 'n') {
    alert('How dare you!! I guess you do not know our 201 instructor, Mr Roger.');
}

else {
    alert('Please, enter your response in correct format. Either yes/no or y/n. It is not case sensative by the way.');
}


////////////////////// Lab 3

// var guessNum = 0;
// console.log('Guessing Number');

for (i = 0; i < 4; i++) {
    guessNum = prompt ('Please guess the number between 1 and 8');
    var int = 6;
    if (guessNum == 6) {
        // console.log(typeof(guessNum));
        alert('YAY, you guessed the right number, how smart!!');
        break;
    } 
    
    else if (guessNum < 6) {
        alert('Guessed too low');
    } 

    else if (guessNum > 6) {
        alert('too high');
    } 

}

if (guessNum != 6) {
    alert('The correct answer is 6');
}

// 7th Question
// for (j = 0; j < 6; j++) {
//     var allQuestions = ["Guess what is the make of my car", "Also, Guess the color of my car?"];
//     var choices: ["Honda", " Toyota", " Nissan", "Huyndai", "Ford", "Blue", "Black", "White", "Red", "Gray"];
//     var answers: [1,7];
//         }


// var answer = false;

// // for (var j=0; j <questions.length; j++)
// var makeOfCar = ['Honda', 'Toyota', 'Nissan'];
// while (answer != true || answer >= 6)



for (var j =0; j <6; j++)
{
    var makeOfCar = prompt('Guess all makes of the cars I owned');
    var car = ['Toyota','Honda', 'Nissan'];

    if (makeOfCar === car[0]) {
        alert('Yes, you got that right');
        alert(score++);
        break;

    } else if (makeOfCar === car[1]) {
        alert('Yes, you are right');
        alert(score++);
        break;
    }

    else if (makeOfCar === car[2]) {
        alert('Yes, you got that right');
        alert(score++);
        break;
    }
    else 
    (makeOfCar != car)
    alert('Try again')

}

alert('The correct answer is ' + car);
alert(score);


/*

// Saying thank you to user 
if (person != null) {
    alert('Thank you ' + person + ' so much for visiting my ugly page and answering my fun questions.');
  }
  
  */

