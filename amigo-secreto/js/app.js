//lista para inclusão de amigos
let amigos = [];

//Função que adiciona amigo em uma lista e apresenta ela no html
function adicionar(){
    //colocar em variaveis nome inserido
    let nomeDoAmigo = document.getElementById('nome-amigo');
    
    //confere se adicionaram o nome ou tem um nome repetido
    if(nomeDoAmigo.value == ''){
        alert('Insira um valor para adicionar.');
        return;
    }else if(amigos.includes(nomeDoAmigo.value)){
        alert('Esse nome já existe na lista, insira um sobrenome.');
        return;
    }
    
    //coloca em uma variavel a lista e inclui na lista
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomeDoAmigo.value);

    //confere se é o primeiro nome a ser incluído 
    // para adicionar uma vírgula
    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = nomeDoAmigo.value;
    }else{
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeDoAmigo.value;
    }
    //retira o nome após ser adicionado na lista
    nomeDoAmigo.value = '';
}
//função de sorteado de amigos
function sortear(){
    //chama uma função que bagunça a lista
    embaralha(amigos);
    //chama onde vamos organizar os elementos
    let sorteio  = document.getElementById('lista-sorteio');
    //confere se pelo menos na lista tem 3 pessoas
    if(amigos.length < 3){
        alert('Insira ao menos 3 amigos');
        return;
    }
    //define que o próximo da lista aleatória será o seu amigo secreto
    //e o último amigo será o primeiro.
    for(let i = 0; i < amigos.length; i++ ){
        if(i == amigos.length - 1){
            sorteio.innerHTML += `${amigos[i]} --> ${amigos[0]} <br>`;
        }else{
            sorteio.innerHTML += `${amigos[i]} --> ${amigos[i + 1]} <br>`;
        }
    }
}
//função que limpa os campos da lista de sorteio e amigos
//e limpa também a lista
function reiniciar(){
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    amigos = [];
}
//função de embaralhamento
function embaralha (lista){
    for (let i = lista.length; i; i--){
        const iAleatorio = Math.floor(Math.random()*i);

        [lista[i - 1], lista[iAleatorio]] = [lista[iAleatorio],lista[i - 1]];
    }
}