function verificarNota(nota, callback) {
    callback(nota);
}

verificarNota(7.5, function(nota) {
    if (nota >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Recuperação");
    }
});