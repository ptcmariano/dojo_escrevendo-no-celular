function escrevendo_celular(caracter) {
    const teclado = {
        "ABC": "2",
        "DEF": "3",
        "GHI": "4",
        "JKL": "5",
        "MNO": "6",
        "PQR": "7",
        "STU": "8",
        "VWXYZ": "9"
    }
    let resultado = ''
    for (const tecla in teclado) {
        resultado += tecla.indexOf(caracter) >= 0 ? teclado[tecla] : '' 
    }
    return resultado;
}

module.exports = escrevendo_celular