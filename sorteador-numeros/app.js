function reiniciar(){
    //reiniciando o sistema
    alterarStatusBotao();
    limparCampos();
}

function sortear(){
    //pegando os valores pelo id do HTML 
    // e colocando em variaveis 
    let quantNumerosSorteados = parseInt(document.getElementById('quantidade').value);
    let numeroLimiteInicio = parseInt(document.getElementById('de').value);
    let numeroLimiteFinal = parseInt(document.getElementById('ate').value);
    let listaSorteio = [];
    let numero;

    //proteção para o usuario não colocar 
    //valor de inicio maior que valor final
    if (numeroLimiteInicio >= numeroLimiteFinal) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        limparCampos();
        return;
    }

    //proteção para usuario não colocar uma quantidade 
    //maior de diferença entre inicio e fim
    if (quantNumerosSorteados > (numeroLimiteFinal - numeroLimiteInicio + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        limparCampos();
        return;
    }
    //definindo os números escolhidos 
    for (let i = 0; i < quantNumerosSorteados; i++){
        numero = obterNumeroAleatorio(numeroLimiteInicio, numeroLimiteFinal);
        
        //verifica se o número sorteado já tá na lista 
        // para incluir um novo não escolhido
        while(listaSorteio.includes(numero)){
            numero = obterNumeroAleatorio(numeroLimiteInicio, numeroLimiteFinal);
        }
        listaSorteio.push(numero);
    }
    //verifica pelo id do HTML onde mostrar resultado
    let resultado = document.getElementById('resultado');

    //altera ele para mostrar a lista com os números sorteados. 
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaSorteio}</label>`

    //altera o botão reiniciar 
    // para que ele dê a possibilidade para o usuario
    alterarStatusBotao();
}


function limparCampos(){
    //Pegando os valores incluidos no seu ID 
    // e substituindo para vazio
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: Nenhum selecionado`
}

function alterarStatusBotao(){
    //a partir do id conferimos o valor do botão 
    // e substituimos para seu contrario
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
    //procura um número aleatório conforme seu valor minimo e máximo
    return Math.floor(Math.random() * (max - min + 1)) + min;
}