# Fundamentos de Algoritmos

O computadro tem o objetivo de processar as informações. Estas, por sua vez, são compostas por dados e instruções. 

**Tipos de dados existentes:** 

- Númericos. Podem ser inteiros ou reais;
- Caracteres: Tudo aquilo que não são números;
- Lógico/Booleano: Dois tipos de resultados possíveis:
  - .Verdadeiro / .V ou .S / 1
  - .Falso / .F ou .N / 0

## Variáveis

Quando queremos usar esses dados em um programa, fazemos isso através de variáveis. **Variáveis** é um tipo de estrutura mutável, ela pode possuir variações, é incerta, inconstante e instável; Ou seja, é uma estrutura que não tem certeza do seu valor, podendo assumir qualquer um dos valores de um determinado conjunto de valor, mas ela está restrita ao seu tipo.

As **constantes** são diferentes das variáveis pois elas não são mutáveis, são invariáveis.

**Regras:**

- Atribuição de um ou mais caracteres;
- Primeira letra, não número
- Sem espaços em branco
- Vetado uso de palavras reservadas
- Caracteres e números

**Papéis:**

- Ação: modifica estado do algoritmo.
- Controle: vigia e controla estrutura dentro do algoritmo.

## Instruções primitivas

Para solucionar problemas, comumente usaremos cálculos matemáticos e, para construir esse cálculo, usaremos operadores - variáveis e constantes. Esses operadores podem ser também tanto unários quanto binários.

![Operadores](https://user-images.githubusercontent.com/99259323/171850195-00d1284d-032b-4a84-922c-60830023aff6.png)

 **Definição formal:** Instruções são linguagem de palavras-chave (vocabulário) de uma determinada programação que tem por finalidade comandar um computador que irá tratar os dados.

 ## Conceitos

 - Entrada: Os dados são importados de algum lugar;
 - Processamento: Ato de levar algo ao computador para que aconteça o processamento dos dados;
 - Saída: São impressos de alguma forma.
  

 ## Estrutura condicional
 
 Dado o estado de uma pessoa ou coisa, há uma condição para isso acontecer. O condicional expressa condição ou suposição ou implica nisso. Dada uma condição que foi satisfeita, executo uma operação. Se não foi satisfeita, há uma exceção.

   - Tipos: 
     - Simples: Apenas verifica se a condição foi satisfeita. Se (condição) então (instrução para condição verdadeira) fim_se;
     - Composta: Busca verificar se a condição foi satisfeita e se há exceções. Se (condição) então (instruções para condição verdadeira) Se não (instruções para condições falsas) fim_se.;
     - Encadeada: Sucessão de estruturar condicionais. Se (condição1) então (instruções para condição verdadeira) Se não (condição2) então (instrução para condição 2 verdadeira e condição 1 falsa) Se não (instrução para condição 1 e 2 falsas) fim_se.

  - Operadores Relacionais:

![1__sS64sGl7FOjH5lecaXICA](https://user-images.githubusercontent.com/99259323/171872129-fe2e2d94-c47e-422c-be05-3a641eaf76a1.png)

  - Operadoes Lógicos: Usados quando precisamos de uma resposta simples, como V ou F.
    - and: condição verdadeira. Todas devem ser satisfeitas.
    - or: Se apenas uma condição for verdadeira, é verdadeiro.
    - not: operador de negação. Inversão do resultado lógico.

![resumo-dos-operadores-logicos](https://user-images.githubusercontent.com/99259323/171873884-cdce17e4-8305-4948-8610-05d1b39fb672.png)

## Estruturas de repetição

Uma estrutura de repetição irá repetir um programa a partir de certos parâmetros dentro dessa estrutura de repetição. 

Existe, para isso, uma condição de parada. Pode partir de um número de repetições pré-fixadas ou de uma condição a ser satisfeita.

**Vantagens de usar:** Redução de linhas, compreensão facilitada, redução de erros.
  - Ex: "Enquanto...faça", "Repita...até" e "Para...de...até...faça".

## Vetores e Matrizes

Vetores são caracterizados por variáveis dimensionadas com tamanho pré-fixado. Pode ser encarado container ou matriz unidirecional.

A matriz, por sua vez, é uma tabela organizada em linhas e colunas no formato m x n, onde m representa o número de linhas (horizontal) e n o numéro de colunas (vertical).

Para navegar nas matrizes, precisaremos de índices.
- Ex: Vetor = []

## Funções

Podem ser conhecidas também como método, bloco, subalgoritmo, subprograma, sub-rotina. A função implica que um elemento A está conectado a um elemento B. Podem ser entendidas, formalmente, como blocos de instruções que realizam tarefas específicas. São identificados por nomes e parâmetros. A função altera o estado do programa.

**Vantagens:** Modularização do programa, código mais simples e reutilização do código.

Elementos ligados a função:
- Definição
- Nome
- Invocação
- Variável local

## Instruções de entrada/saída

Entrada - Consiste na inserção e recebimento de dados do mundo real por meio de ação de alguma interface, seja teclado, mouse, arquivos, entre outros.

Saída - Consiste na impressão dos dados do mundo abstrato, digital por meio de ação de alguma interface. Os formatos podem variar desde simples arquivos binários até complexas querys de banco de dados. Existem dois tipos:
  - Saída do programa: Condicional ou Inducional.
  - Saíde de interrupação: Definida pelos periféricos.