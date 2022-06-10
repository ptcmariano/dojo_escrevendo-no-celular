const escrevendo_celular = require('./escrevendo-celular')

describe(`escrevendo-celular, 
    para saber qual sequencia digitar eu envio,
    envio as palavras que eu quero e
    recebo os numeros que preciso digitar`, () => {
        it('enviar leta A deve retornar 2', () =>{
            const ENVIO = 'A'
            const RETORNO = '2'
            const resultado = escrevendo_celular(ENVIO)
            expect(resultado).toBe(RETORNO)
        })
        it('enviar leta D deve retornar 3', () =>{
            const ENVIO = 'D'
            const RETORNO = '3'
            const resultado = escrevendo_celular(ENVIO)
            expect(resultado).toBe(RETORNO)
        })
        it('enviar leta B deve retornar 2', () =>{
            const ENVIO = 'B'
            const RETORNO = '2'
            const resultado = escrevendo_celular(ENVIO)
            expect(resultado).toBe(RETORNO)
        })
        it('enviar leta KI deve retornar 54', () =>{
            const ENVIO = 'KI'
            const RETORNO = '54'
            const resultado = escrevendo_celular(ENVIO)
            expect(resultado).toBe(RETORNO)
        })
})