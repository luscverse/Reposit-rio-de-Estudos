//solucao 1

function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
    // a partir do momento que usamos split, nossa string retorna um array
    // quando você usa o join, você junta todos os elementos do array
}

console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("gato"));
console.log(verificaPalindromo("ama"));

//solucao 2

function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]) {
        return false;
        }
    }
    return true;
}

console.log(verificaPalindromo("abba"));
console.log(verificaPalindromo("gato"));