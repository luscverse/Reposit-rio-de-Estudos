# Tipos

## Estruturas de dados

Javascript é uma linguagem de tipagem dinâmica, ou seja, antes de declarar um valor, você não especifica o tipo dele.

A **tipagem dinâmica** permite que conforme o seu programa vá rodando e você modifique suas variáveis, é possível mudar o tipo dela.

### Tipos de dados

![Tipos de dados](https://user-images.githubusercontent.com/99259323/176167380-6ef9d151-6dc9-4548-834f-0adcbe82db0d.png)

## Strings

- São comumente utilizados para textos.
- Valores são declarados entre aspas ou crases.
- É um tipo de dado iterável (A contagem de elementos da string começa do 1, mas a indexação começa do 0)

Exemplo:

```
const DIO = 'Digital Innovation One';

let firstName = 'João';
let lastName = 'Luiz';

let fullName = `Nome Completo: ${firstName} ${lastName}`;
```

## Numbers

- Números podem ser inteiros ou decimais
- Usualmente declarados sem aspas
- O Javascript possui uma biblioteca chamada Math
- Trabalhar com porcentagem exige que você trabalhe com a concatenação de números e strings

Exemplo:

```
let num = 100

//adição
num + 3

//subtração
num - 3

//multiplicação
num * 3

//divisão
num / 3

//verificar se é par
num % 2
```

## Booleans

- Um valor booleano ou é verdadeiro (true) ou falso (false)
- Com eles, eu posso validar condicionais
- Sempre que eu usar exclamação (!) antes do valor, o boolean vai me retornar o contrário

Exemplo:

```
let validation = 3 === 0
validation
//false

let validation = 3 === 3
validation
//true

validation = 3 > 4
//false

validantion = 3 > 2
//true

validation = 3 >= 2
//true
```

## Arrays

