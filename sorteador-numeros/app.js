function sortear(){
    let quantNumerosSorteados = document.getElementById('quantidade').value;
    let numeroLimiteInicio = document.getElementById('de').value;
    let numeroLimiteFinal = document.getElementById('ate').value;
    let listaSorteio = [];
    let numeroSorteado = 0;
    let i = 0;

    numeroSorteado = parseInt(Math.random() * numeroLimiteFinal + 1);
    listaSorteio = [1,2,3,4,5];
    while(i = 1, i < listaSorteio.length(), i++ ){
        if(numeroSorteado < numeroLimiteInicio){
        numeroSorteado = parseInt(Math.random() * numeroLimiteFinal + 1);
    }else{
        listaSorteio.push(numeroSorteado);
    }
    
    }

    
        
}

function reiniciar(){

}