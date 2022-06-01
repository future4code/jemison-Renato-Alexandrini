
```function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
let contaNumero = 0  
  for(let contador = 0; contador < arrayDeNumeros.length; contador ++){
      if(arrayDeNumeros[contador] === numeroEscolhido){
    contaNumero = contaNumero + 1
  }}
           if(contaNumero > 0){
          return console.log(`O número ${numeroEscolhido} aparece ${contaNumero}x`)
      }
      else{return  console.log("Número não encontrado")
      }