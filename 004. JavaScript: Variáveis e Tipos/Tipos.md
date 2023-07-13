# Tipos

**Estruturas de dados:**
- Javascript é uma linguagem de tipagem dinâmica, ou seja, antes de declarar um valor, você não especifica o tipo dele.
- A **tipagem dinâmica** permite que conforme o seu programa vá rodando e você modifique suas variáveis, é possível mudar o tipo dela.

## Tipos de dados

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

## Arrays (ou Vetores)

- Listas iteráveis de elementos
- Utiliza propriedades como index e lenght:

![Arrays](https://user-images.githubusercontent.com/99259323/176434373-11955f4f-fa80-465d-9f1a-3c6a4647a4da.png)

Exemplo:

```
let array = []
//undefined

//adicionar item no array (ao final)
array.push(3)
//retorna 1 (tamanho da lista)

array.push(2)
//retorna 2

array
//retorna '(2) [3,2]'

//tirar número o último elemento do array
array.pop()
//retorna 2

array
//retorna '[3]'

array.push(2)
//retorna 2

array.push(5)
//retorna 3

//Quero tirar o primeiro elemento
array.shift()
//retorna 3

array
//retorna '(2) [2,5]'

//Quero adicionar elemento no começo da lista
array.unshift(1)
//retorna 3

array
//retorna '(3) [1,2,5]'

for(let i = 0; i <array.length; i++){
    console.log(array[i])
}
//retorna 1
//retorna 2
//retorna 5

//Quero checar se existe algum elemento
array.includes(3)
//retorna valor booleano 'false'

//Quero checar se todas as minhas entradas são do número 5
array.every(item => item === 5)
//retorna false

//Quero checar se um dos elementos é 5
array.some(item => item === 5)
//retorna true

//Quero reverter meu array
array.reverse()
//retorna '(3) [5,2,1]'
```

## Objetos

- Geralmente seguem a seguinte estrutura: Chave a Valor.

```
let person = {
    name: 'John',
    age: 20
}; 
```

- Name e age são **Keys** John e 20 são **Values**.
- Entre uma key e outra, utilizamos a vírgula como separador e não o ponto e vírgula.

Exemplos:

```
let obj = {}
//retorna undefined

typeof obj
//retorna "object"

obj.name = "Julia"
//retorna "Julia"

obj
/* retorna {name: "Julia"}
    name: "Julia"
    __proto__: Object */

obj.age = 20
//retorna 20

obj
/* retorna {name: "Julia", age: 20}
    age: 20
    name: "Julia"
    __proto__: Object */

Object.values(obj)
//retorna (2) ["Julia", 20]

Object.keys(obj)
/* retorna (2) ["name", "age"]
    0: name
    1: age
    length: 2
    __proto__: Array(0) */

let person = {
    name: "Julia",
    age: 20,
    adrees: "Rua 2"
    }
//retorna undefined

person
/* retorna {name: "Julia, age: 20, adress: "Rua 2"}
    adress: "Rua 2"
    age: 20
    name: "Julia"
    __proto__:Object */

//para declarar
person.name
//retorna "Julia"

//para retornar, geralmente com o intuito de declarar uma variável dentro do objeto
person["name"]
//retorna "Julia
```

## Empety, null e Undefined

- São valores que sempre retornam como diferentes de true em caráter booleano.
- Quando o valor é **empty**, quer dizer que você declarou a variável. 
  - Se for um number, você declarou 0;
  - Se for string, você apenas usou aspas sem valor declarado;
  - Se for array, você apenas inicializou com colchetes;
  - Se for objeto, você apenas inicializou com chaves.

- Quando o valor é **null**, você propositalmente deseja que este valor não exista. Não foi inicializado, você quer que o valor seja nulo.

- Quando o valor **undefined**, você se quer chegou a declarar alguma coisa, esse valor nem existe.
