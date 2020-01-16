'use strict'

console.log('Alive over here too')
var person = prompt("Hi, please enter your name.");
if (person != null) {
  alert('Hello ' + person + '! Welcome to my page. I hope you do not mind some fun quiz questions I have created!!');
}




var likesSeattleWeather = prompt('Do you like Seattle weather? Please respond with yes/no or y/n');

if ((likesSeattleWeather.toLowerCase() === 'yes') || 'y') {
    // toLowerCase() is built in Method
    alert('Okay, I guess you have never been to Colorado then!');
} 

else if ((likesSeattleWeather ==='no') || 'n') {
    alert('I feel you, but lets try to look at the bright side.');

}

else {
    alert('Please, enter your response in correct format. Examples: yes/no or y/n');
}


var haveDog = prompt('Do you have dog? Please respond with yes/no or y/n');

if ((haveDog.toLowerCase() === 'yes') || 'y') {
    // toLowerCase() is built in Method
    alert('YAY, I do too. They are so cute.');
} 

else if ((haveDog ==='no') || 'n') {
    alert('Really, you probably never had one then, just saying. I do not mean to be rude though.');

}

else {
    alert('Please, enter your response in correct format. Examples: yes/no or y/n');
}



var educationCost = prompt('Do you beleive that attending college is expensive? Please respond with yes/no or y/n');

if ((educationCost.toLowerCase() === 'yes') || 'y') {
    // toLowerCase() is built in Method
    alert('I know right. I wish either me or my parents were billionaire.');
} 

else if ((educationCost ==='no') || 'n') {
    alert('Seriously, you are a crazy human being if you are a human being or you must be a drug dealer. Just kidding.');

}

else {
    alert('Please, enter your response in correct format. Examples: yes/no or y/n');
}



var watchGameOfThrones = prompt('Did you watch the last season of Game of Thrones? Please respond with yes/no or y/n');

if ((watchGameOfThrones.toLowerCase() === 'yes') || 'y') {
    // toLowerCase() is built in Method
    alert('OMG, I felt like the whole America was watching the season.');
} 

else if ((watchGameOfThrones ==='no') || 'n') {
    alert('Did not you have cable in your house? Not judging though.');

}

else {
    alert('Please, enter your response in correct format. Examples: yes/no or y/n');
}


var numberOneFan = prompt('Do you think that our intructor, Mr. Roger is a "Number 1 Fan" of Star Wars Movies? Please respond with yes/no or y/n');

if ((numberOneFan.toLowerCase() === 'yes') || 'y') {
    // toLowerCase() is built in Method
    alert('Oh yes, I have no doubt. Mr Roger loves Star Wars movies.');
} 

else if ((numberOneFan ==='no') || 'n') {
    alert('How dare you!! I guess you do not know our 201 instructor, Mr Roger.');

}

else {
    alert('Please, enter your response in correct format. Examples: yes/no or y/n');
}
