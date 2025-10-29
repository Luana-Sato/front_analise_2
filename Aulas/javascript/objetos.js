// dados simples: numericos, strings, boolean...
// array: [1,2,3, 'ana']
// objetos: {nome: 'Luana', idade: 21}
// funcões 

// objetos literais
{
    // propriedade: visualViewport
    //      key: value
}

const perfil= {
    nome: 'Luana Sato',
    idade: 21,
    profissao: 'Professora',
    solteiro: true,
    roupas: ['camisa', 'shorts', 'jeans']
}

console.log(Object.entries(perfil)) //Traz cave e valor
console.log(Object.keys(perfil)) //Traz só chaves
console.log(Object.values(perfil)) //Traz só valores

// let dadosperfil = []

// for(let dados in perfil){
//     dadosperfil.push(perfil[dados])
// }
// alert(dadosperfil)

// for(let dados in perfil){
//     console.log(perfil[dados])
// }

// atribuiçao dinâmic
// perfil.roupas = ['camisa', 'shorts', 'jeans']

// console.log(perfil.nome)
// console.log(perfil.idade)
// console.log(perfil.profissao)
// console.log(perfil.solteiro)
// console.log(perfil.roupas)