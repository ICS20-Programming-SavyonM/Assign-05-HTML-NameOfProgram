"use strict";

/**
 * This function checks if a user input number is prime or not
 */
function checkPrime() {
  
  // Initialize the variables
  let message = "";
  let counter = 2;
  let result = 1;
  let userNum = parseInt(document.getElementById('userNum').value);

  if (userNum < 2) {
    message = "The number " + userNum + " is not prime.";
  }
  if (userNum == 2) {
    message = "The number 2 is prime";
  }

  // Use a while loop to determine if the number is prime
  while (counter < userNum) {
    result = userNum / counter;

    // Statement for not a prime number
    if (Number.isInteger(result)) {
      counter = userNum + 1;
      message = "The number " + userNum + " is not a prime number.";
    }

    // Increment the counter
    counter++;
  }

  // Result for prime number
  if (counter == userNum) {
    message = "The number " + userNum + " is a prime number.";
  }

  // Generate numbers from 0 up to the entered number using a for loop for positive numbers
  let numbers = "";
  for (let num = 0; num <= userNum; num++) {
    numbers += num + " ";
  }

  // Generate numbers from 0 up to the entered number using a for loop for positive numbers
  let negnumbers = "";
  for (let num = 0; num >= userNum; num--) {
    numbers += num + " ";
  }

  // Display the numbers and prime check result
  document.getElementById('display-results').innerHTML = "Numbers from 0 to " + userNum + ":<br>" + numbers + "<br><br>" + message;
}