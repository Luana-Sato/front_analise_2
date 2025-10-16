/*
Arrays são agrupadores de valores numéricos,
textuais, booleanos, objetos, etc. Eles são 
ordenados a partir do índice '0'
Ex.: const time = ['Pedro', 22, 'Julio', 'Ana']
    // indices        0      1     2       3
*/
const vestuario = ['Camiseta', 'Tênis', 'Calça jeans', 'Colar', 88, 'Óculos', 20]
vestuario[33] = 'Chapeu' //Atribuição dinâmica

for(let valor of vestuario) {
    console.log(valor)
}
// console.log(vestuario[1])
// console.log(vestuario[4])
// console.log(vestuario[0])
// console.log(vestuario[33])
