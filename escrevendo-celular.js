function escrevendo_celular(caracter='') {
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
    for (let i = 0; i < caracter.length; i++) {
        for (const tecla in teclado) {
            const letra = caracter[i];
            resultado += tecla.indexOf(letra) >= 0 ? teclado[tecla] : ''
        }
    }
    return resultado;
}

module.exports = escrevendo_celular