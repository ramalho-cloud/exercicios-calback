function mostrarBoasVindas() {
    console.log("Bem vindo!")
}

function mostrarDespedida() {
    console.log("Tchau!")
}

function executarMensagem(callback) {
    mostrarBoasVindas()
    mostrarDespedida()
}

executarMensagem()