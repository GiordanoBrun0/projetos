function reiniciar(){
    alterarStatusBotao();
    limparCampos();
}

function sortear(){
    let quantNumerosSorteados = parseInt(document.getElementById('quantidade').value);
    let numeroLimiteInicio = parseInt(document.getElementById('de').value);
    let numeroLimiteFinal = parseInt(document.getElementById('ate').value);
    let listaSorteio = [];
    let numero;

    if (numeroLimiteInicio >= numeroLimiteFinal) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        limparCampos();
        return;
    }

    if (quantNumerosSorteados > (numeroLimiteFinal - numeroLimiteInicio + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        limparCampos();
        return;
    }

    for (let i = 0; i < quantNumerosSorteados; i++){
        numero = obterNumeroAleatorio(numeroLimiteInicio, numeroLimiteFinal);
        while(listaSorteio.includes(numero)){
            numero = obterNumeroAleatorio(numeroLimiteInicio, numeroLimiteFinal);
        }
        listaSorteio.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaSorteio}</label>`
    console.log(`Lista sorteada: ${listaSorteio}`);

    alterarStatusBotao();
}


function limparCampos(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: Nenhum selecionado`
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}