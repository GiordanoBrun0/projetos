
//Altera status dos produtos da alugames
function alterarStatus(id){
    //recupera a partir do id qual é sua funçao (imagem, botão ou game)
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let confirmacao = confirm(`Quer mesmo ${botao.textContent}?`);
    
    //confirmação se quer alugar ou devolver 
    if(confirmacao == false){
        return;
    }
    
    //se estiver devolvendo, vai clarear a imagem e mudar botão para 'alugar'
    else if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = 'Alugar';

    //se estiver alugando, vai escurecer a imagem e mudar botão para 'devolver'    
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver';
    }
    //insere o relatorio de quantos jogos estão alugados no console
    relatorioJogosAlugados();
}

//confere quantidade jogos alugados
function relatorioJogosAlugados(){
    let alugados = 0;
    //confere se a imagem está escura para definir se está ou não alugada
    for(let id = 1;id < 4; id++){
        let gameClicado = document.getElementById(`game-${id}`);
        let imagem = gameClicado.querySelector('.dashboard__item__img');

        if(imagem.classList.contains('dashboard__item__img--rented')){
            alugados++;
        }
    }
    //retorna para o console quantos estão alugados
    console.log(`jogos alugados: ${alugados}`);
    
}

