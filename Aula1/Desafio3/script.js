var anosLuz = 1;
var km = 9460528405000.02;

var resultado = anosLuz * km;
resultado = resultado.toFixed(2);

var distanciaEntreEstrelas = 5.24;
var diasEmAnosLuz = 365;

var diasDeDistancia = distanciaEntreEstrelas * diasEmAnosLuz;
diasDeDistancia = diasDeDistancia.toFixed(2);

alert (anosLuz + ' ano-luz equivale a '+ resultado + ' quilometros');

alert ('A distancia entre Sirius e Procion é de ' + distanciaEntreEstrelas + ' anos-luz, colocando as distancia em dias o resultado é de ' + diasDeDistancia + ' dias');