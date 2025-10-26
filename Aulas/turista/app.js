const lugares = ['praia', 'montanha', 'deserto']
const mensagem = `
        -- ROTEIRO DE VIAGENS -- 
        Lugares: ${lugares}
        ------------`
alert(mensagem) // Fake menu
const escolhausuario = prompt('Para onde deseja viajar? ')
if (escolhausuario == null || escolhausuario == '') {
  alert('Por favor digite um valor da lista de viagem!')
} else {
  if (lugares.includes(escolhausuario)) {
    if (escolhausuario == 'praia') {
      window.location.href = './praia.html'
    } else if (escolhausuario == 'montanha') {
      window.location.href = './montanha.html'
    } else if (escolhausuario == 'deserto') {
      window.location.href = './deserto.html'
    }
  } else {
    alert('Destino não encontrado! Tente "praia", "montanha" ou "deserto".')
  }
}
