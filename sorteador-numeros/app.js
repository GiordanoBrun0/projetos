function reiniciar(){

}

function sortear(){
    let quantNumerosSorteados = parseInt(document.getElementById('quantidade').value);
    let numeroLimiteInicio = parseInt(document.getElementById('de').value);
    let numeroLimiteFinal = parseInt(document.getElementById('ate').value);
    let listaSorteio = [];

    numero = parseInt(Math.random() * numeroLimiteFinal + 1);
    for (let i = 0; i < quantNumerosSorteados;){
        if(numero < numeroLimiteInicio){
            numero = parseInt(Math.random() * numeroLimiteFinal + 1); 
        }else{
            listaSorteio.push(numero);
            numero = parseInt(Math.random() * numeroLimiteFinal + 1);
            i++;
        }
    }
    console.log(`Lista sorteada: ${listaSorteio}`);

}