function ArrayChallenge(arr) { 

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