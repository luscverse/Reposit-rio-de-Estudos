// Comentário de 1 linha, basta usar duas barras no começo da linha.

/* Comentários de mais de 1 linha, usa-se a 
barra+asterisco no começo e no final */

// constantes geralmente são tituladas em MAIUSCULO (boa prática)

/* Variáveis (var) são os valores.
Constantes (const) são valores imutáveis.
Funções (function) são as 'equações' com o objetivo de resolver um problema ou obter um resultado. */

var preco = 2;
var desconto = 0.2;
const PRECO = 2;
var total = PRECO - desconto;

function soma(a, b) {
    console.log(a + b);
    return a + b;
}

soma(3, 5);