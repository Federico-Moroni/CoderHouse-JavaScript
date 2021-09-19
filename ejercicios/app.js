// Write a program to check two numers and return true if one of the numbers is 100 or if the sum of the two numbers is 100.

/*
const isEqualTo100 = (a, b) => a === 100 || b === 100;
console.log(isEqualTo100(70,0));
*/

// Write a program to get the extension of a file name.

/*
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('webpack.config.js'));
*/

// Write a program to replace every character in a given string with the character following it in the alphabet.

/*
const moveCharsForward = (str) => 
    str.split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

console.log(moveCharsForward('abcd'));
*/

// Write a program to get the current date. Expected output: mm-dd-yyyy, mm/dd/yyyy, dd/mm/yyyy.

/*
const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}

console.log(formatDate());
*/

// Write a program to create a new string adding "New!" in front of a given string. If the String begins with "New!" already, then return the original string. 

/*
const addNew = (str) =>
    str.indexOf('New!') === 0 ? str : `New! ${str}`;
console.log(addNew('New! Offers'));
*/