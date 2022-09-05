// Array Challenge
// Have the function ArrayChallenge(arr) take the array of numbers stored in arr and return the string true if any two numbers can be multiplied so that the answer is greater than double the sum of all the elements in the array. If not, return the string false. For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all these elements is 42 and doubling it is 84. There are two elements in the array, 16 * 6 = 96 and 96 is greater than 84, so your program should return the string true.

1function ArrayChallenge(arr) { 

    let somaNumeros = 0;
    let maioresNumeros = [0, 0]
    for(i of arr){
      somaNumeros += i;
      if(i > maioresNumeros[0]){
        if(maioresNumeros[0] > maioresNumeros[1]){
          maioresNumeros[1] = maioresNumeros[0];
        }
        maioresNumeros[0] = i
      } else if (i > maioresNumeros[1]){
        maioresNumeros[1] = i
      }
    }
  
    let multiplicacaoMaioresNumeros = maioresNumeros[0] * maioresNumeros[1];
    let dobroDaSoma = somaNumeros * 2;
  
    if(multiplicacaoMaioresNumeros > dobroDaSoma){
      return "true"
    } else {
      return "false"
    }
  }