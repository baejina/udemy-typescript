"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "string max";
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const errorResult = generateError('an error occurred!', 500);
const button = document.querySelector("button");
function clickHandler(message) {
    console.log("Clicked!", message);
}
if (button)
    button.addEventListener('click', clickHandler.bind(null, 'you\'r welcome'));
