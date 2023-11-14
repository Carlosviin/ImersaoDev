var nome = 'Carlos';

var valorEmDolar = 30;
var cotacaoDoDolar = 4.91;

var valorEmReal = valorEmDolar*cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);

alert ('Olá ' + nome + ', U$ ' + valorEmDolar + ' vale R$' + valorEmReal);