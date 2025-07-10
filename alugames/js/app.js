

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let confirmacao = confirm(`Quer mesmo ${botao.textContent}?`);
    
    if(confirmacao == false){
        return;
    }
    
    else if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = 'Alugar';
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver';
    }

    relatorioJogosAlugados();
}

function relatorioJogosAlugados(){
    let alugados = 0;
    for(let id = 1;id < 4; id++){
        let gameClicado = document.getElementById(`game-${id}`);
        let imagem = gameClicado.querySelector('.dashboard__item__img');

        if(imagem.classList.contains('dashboard__item__img--rented')){
            alugados++;
        }
    }
    return console.log(`jogos alugados: ${alugados}`);
    
}

