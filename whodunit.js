

// Episode 1

// Miss Scarlet

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);


// Episode 2

// Professor Plum - because const cannot be changed.

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// Episode 3

// First Verdict = Mrs Peacok as the murder is changed by declareMurder() with let murder = 'Mrs Peacock'
// Second verdict = Professor Plum as the above change was a let inside of the function and is not seen outside of the function.

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// Episode 4

// Suspects are Miss Scarlet, Professor Plum, Colonel Mustard - as the change to 3) is inside the function.
// Suspect Three is Mrs Peacock as the change is not seen outside of the function.

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Episode 5

// Declare Weapon is at first the Candlestick (not console.logged) but the verdict is Revolver by the changeWeapon(). The Scenario is a const and unchangeable but the key value pairs can be changed.

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);


// Episode 6

// Mrs White - see below notes.

// let murderer = 'Colonel Mustard';


// const changeMurderer = function() {
//   murderer = 'Mr. Green';


//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// // At this stage the above function has not been called so Colonel Mustard is still the murderer.
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// // Changed to Mr Green then nested plotTwist() chnages it to Mrs White.
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// Episode 7

// Miss Scarlet - inside the changeMurderer() plotTwist is called but the final step of this is unexpectedOutcome() so the murderer returned by changeMurderer is Miss Scarlet
// Above was wrong - Mr Green is correct because...? the outer function overwrites the nested function because murderer has no let/const keyword.

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


// Episode 8

// The weapon is the candle stick because unexpectedOutcome() checks the room and chnages murderer to Colonel Mustard when finding the room is the dining room and plotTwist changes the weapon to the candlestick when is finds the murderer is Colonel Mustard.

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);


// Episode 9

// Professor Plum as there is no function/call to make the if statement run and change it to Mrs Peacock

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

