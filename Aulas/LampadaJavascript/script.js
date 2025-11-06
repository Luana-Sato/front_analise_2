const btnAlternar = document.getElementById('btn-alternar')
const imgLampada = document.getElementById('lampada')
const baseUrl = "https://refactored-halibut-pjqpg4qg69p936xwp-5509.app.github.dev/Aulas/LampadaJavascript/"


// alert(lampada.src)
// alert(btnAlternar.textContent)

btnAlternar.addEventListener('click', function (e) {
    if (imgLampada.src == baseUrl + "lampada1.png") {
        imgLampada.src = "lampada2.png"
        btnAlternar.textContent = "Lâmpada Acesa!"
        btnAlternar.style.backgroundColor = 'green'
    } else {
        imgLampada.src = "lampada1.png"
        btnAlternar.textContent = "Lampada Apagada!"
        btnAlternar.style.backgroundColor = 'yellow'
    }

})

btnAlternar.addEventListener('dblclick', function (e) {
    imgLampada.src = "lampada0.png"
    btnAlternar.textContent = "Lampada Queimada"
    btnAlternar.style.backgroundColor = 'red'
})