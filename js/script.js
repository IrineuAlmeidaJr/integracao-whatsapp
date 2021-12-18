function enviarMensagem () {
    const DDI = '55'
    let numCelular = DDI + document.querySelector('input#numCelular').value
    let mensagem = document.querySelector('textarea#txtMensagem').value
    mensagem = window.encodeURIComponent(mensagem)
    
    let url = `https://api.whatsapp.com/send?phone=${numCelular}&text=${mensagem}`

    window.open(url)
}