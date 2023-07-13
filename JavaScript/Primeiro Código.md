# Primeiro código

O método *‘log()’* existe essencialmente para permitir o envio de dados para o console de depuração. Podemos testar com o seguinte código:

```jsx
console.log ('Olá, Mundo');
```

**Formas de trazer o JavaScript no HTML**

Na primeira, a inserimos dentro do próprio HTML usando as tags abaixo. É válido ressaltar que esta *não é uma boa prática* de programação em Javascript.

```jsx
<script>
	console.log('Olá, Mundo!');
</script>
```

A forma correta de usar o JavaScript é criar uma nova página externa ao HTML e, então, chamá-la usando o código abaixo.

```jsx
<script src="./index.js"></script>
```

O ideal é que essa convocação esteja ao fim do código, especificamente no fim do body. Pois o código será lido de cima para baixo, carregando somente o visual e, ao fim, carregando as interações que o usuário poderá realizar.

Se você optar por colocar a chamada de JavaScript no começo, é preciso usar um mecanismo que impeça que a chamada precipitada do arquivo cause deformação na página.

```jsx
<script src="./index.js" defer></script>
```

---

No terminal, uma vez que você esteja dentro da pasta e usar o código abaixo. Você obterá a mesma resposta que aparece no console do navegador.

```jsx
node index.js 
```

---

**Comentários**

Existem duas formas de fazer comentários num arquivo de JavaScript, vistas abaixo. É importante salientar que, tudo que existe enquanto comentário no código *NÃO interfere no resultado final,* pois é ignorado pelo compilador.