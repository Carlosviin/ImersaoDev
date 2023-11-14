var numeroSecreto = parseInt((Math.random () * 1000)+1); 
var numeroDeTentativas = 0

while(chute != numeroSecreto){
    numeroDeTentativas = numeroDeTentativas + 1;
    var chute = prompt('Digite um numero entre 1 e 1000');
    if (chute == numeroSecreto) {
        alert('acertou!');

    }else if (chute > numeroSecreto){  
        alert ('Errou :( O numero secreto é menor');

    } else if (chute < numeroSecreto){
        alert ('Errou :( O numero secreto é maior')
    }
    if(numeroDeTentativas == 10){
        alert('Suas tentativas acabaram');
        break;        
    }
}
alert ('Você tentou ' + numeroDeTentativas + ' tentativas')