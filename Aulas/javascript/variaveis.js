//alert('OK') 
//console.log('Não sou a Ju');

/*
- Variáveis são espaços em memória usados 
para armazenar dados reaproveiáveis.
    var - Desaconselhável
    let - Valor que poderá variar
    const - Valor que não pode variar
*/
let nome = prompt("Qual é o seu nome? ") // O sinal de = sozinho é o mesmo que atribuir valores
let sobrenome = prompt("Qual seu sobrenome? ")
const cpf = prompt("Qual seu CPF [Somente números]? ")
const solteiro = true
let roupa = prompt("Qual é seu estilo de roupa? ")

console.log("---- PERFIL ----\n ")
console.log("Nome:" + nome)
console.log("Sobrenome:" + sobrenome)
console.log("CPF:" + cpf)
console.log("Solteiro:" + solteiro)
console.log("Roupa:" + roupa)
console.log("-----------------\n")
//console.log(nome+ " " +sobrenome) // O sinal + é para "concatenar" valores