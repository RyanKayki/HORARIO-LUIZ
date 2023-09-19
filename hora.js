function exibirDataHora() {
    const dataHoraElement = document.getElementById('data-hora')

    function atualizarHora() {
        const dataHoraAtual = new Date()
        const formatoDataHora = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
        const dataHoraFormatada = dataHoraAtual.toLocaleDateString('pt-BR', formatoDataHora)

        dataHoraElement.textContent = `${dataHoraFormatada}`
    }
    setInterval(atualizarHora, 1000)
    atualizarHora()
}
exibirDataHora()