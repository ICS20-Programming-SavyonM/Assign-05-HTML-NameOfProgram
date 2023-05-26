"use strict";

/**
 * This function checks if a user input number is prime or not
 */
function checkPrime() {
  
  // intialize the variables
  let message = "";
  
  let counter = 2;
  
  let result = 1;
  
  let userNum = parseInt(document.getElementById('userNum').value);

  if (userNum < 2) {
    message = "The number " + userNum + " is not prime.";
  }
  if (userNum == 2){
    message = "The number 2 is prime";
  }

  // use a while loop to determine if number is prime
  while (counter < userNum) {
    result = userNum / counter
    
    // statement for not prime number
    if (result == Number.isInteger(value)) {
      counter == userNum + 1
      
      message = "The number " + userNum + " is not a prime number."
    }
    
    // increment the counter
    counter++;
  }
  
  //result for prime number
  if (counter == userNumber){
    message = "The number " + userNum + " is a prime number."
  }
  
<br></br>
  document.getElementById('display-results').innerHTML = message;
}
