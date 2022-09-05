// Math Challenge
// Have the function MathChallenge(num) return the string yes if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.

function MathChallenge(num) { 

    // code goes here  
    let fibonacci = [0, 1];
    let lastNum = 0;
    let i = 0;
  
    while (lastNum < num){
      n1 = fibonacci[i];
      n2 = fibonacci[i+1];
  
      nF = n1 + n2;
      fibonacci.push(nF);
      lastNum = parseInt(fibonacci[fibonacci.length - 1]);
      i++;
    }
  
    if(fibonacci.includes(num)){
      return "yes";
    } else {
      return "no"; 
    }
  }