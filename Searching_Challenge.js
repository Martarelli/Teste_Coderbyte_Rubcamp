// Searching Challenge
// Have the function SearchingChallenge(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.

function SearchingChallenge(str) { 
  
    // code goes here  
    let regex = /^\w+$/;
    let regexUnderscore = /^[_]$/
    if(str.length >= 4 && str.length <= 25){
      if(isNaN(str[0])){
        if(regex.test(str)){
          if(!regexUnderscore.test(str[str.length - 1])){
            return "true";
          } else {
            return "false"; 
          }
        } else {
            return "false"; 
          }
      } else {
            return "false"; 
          }
    } else {
      return "false"; 
    }
  
  }