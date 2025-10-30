// Funções são blocos de código que podem ser reaproveitados 
// ao longo da execução do programa 
// caracteristicas:
//   > podem ser nomeados ou não
//   > podem receber parâmetros ou não
//   > podem retornar valor ou não

function dizOla() {
    alert ("Diz Olá!")

}
function dizOlaPessoa (nome) {
    alert (`não seja tímido(a) ${nome} . Fala oi!`)
}

const jogadores = ['Neymar', 'Vini Jr', 'Cocielo']
const frutas = ['banana', 'morango', 'uva']

    function formataTexto(lista){
        for (let texto of lista){
            console.log( texto.toUpperCase());
            //texto.toLowerCase() > tudo para maiuscula
            //texto.trim() > elimina espaços em branco
            //texto.join(' outra coisa') > junta com outro texto
            
        }
    }

//criar funçoes das 4 opereçoes

function adicao(n1, n2){
    return n1 + n2
}
const resultadoAdicao = adicao (5, 25) + (-60)
console.log (`Adição: ${resultadoAdicao}`) // valor 30

function subtracao(n1, n2){
    return n1 - n2
}
const resultadoSubtracao = subtracao (40, 15) 
console.log (`Subtração: ${resultadoSubtracao}`) // valor 25

function multiplicacao(n1, n2){
    return n1 * n2
}
const resultadoMultiplicacao = multiplicacao (8, 20) 
console.log (`Multiplicação: ${resultadoMultiplicacao}`) // valor 160

function divisao(n1, n2){
    return n1 / n2
}
const resultadoDivisao = divisao (124, 12) 
console.log (`Divisão: ${resultadoDivisao}`) // valor 10.333333333333334

//criar funçoes das 4 opereçoes
//invocar ou chamar a função
//  formataTexto(jogadores)
// formataTexto (frutas)
// formataTexto("eumeamo")
// dizOla()
// dizOlaPessoa("vithoria")
// dizOlaPessoa("luana")
// dizOlaPessoa("jhessy")