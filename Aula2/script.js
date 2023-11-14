var numeroSecreto = parseInt((Math.random () * 1000)+1); 
var numeroDeTentativas = 0;
var tentativasRestantes = 10;

while(chute != numeroSecreto){
    numeroDeTentativas = numeroDeTentativas + 1;
    var chute = prompt('Digite um numero entre 1 e 1000. Você tem ' + tentativasRestantes + ' tentativas restantes');
    tentativasRestantes = tentativasRestantes - 1;

    if (chute == numeroSecreto) {
        alert(':D acertou! Você usou ' + numeroDeTentativas + ' tentativas');

    }else if (chute > numeroSecreto){  
        alert (':( Errou 1O numero secreto é menor');

    } else if (chute < numeroSecreto){
        alert (':( Errou O numero secreto é maior')
    }
    if(numeroDeTentativas == 10){
        alert(':( Você perdeu... suas tentativas acabaram');
        break;        
    }
}