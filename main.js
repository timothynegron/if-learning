/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

function isItLong (str) {
  return str.length > 20 ? 'That\'s a long string!' : undefined;
}

function isItMedium (str) {
  return str.length >= 10 && str.length <= 20 ? 'That\'s a regular sized string!' : undefined;
}

function isItShort (str) {
  return str.length < 10 ? 'That\'s a small string!' : 'That\'s not a small string!';
}

function howLongIsMyString (str) {
  return str.length > 20 ? 'That\'s a long string!' 
  : str.length >= 10 && str.length <= 20 ? 'That\'s a regular sized string!' 
  : 'That\'s a small string!'
}

function instructorHeight (str) {
  return str === 'Colin' ? 62 
  : str === 'Mesuara' ? 69 
  : 'I don\'t know that instructor!'
}



/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}