function conferirPalindromo() {
    alert('Vamos conferir se a palavra inserida é um palíndromo:');
    let palavra = prompt("Insira a palavra: ");
    let palavraContraria = '';

    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraContraria += palavra.charAt(i);
    }

    if (palavra.toUpperCase() === palavraContraria.toUpperCase()) {
        alert(`A palavra "${palavra}" é um palíndromo.`);
    } else {
        alert(`A palavra "${palavra}" NÃO é um palíndromo. Seu contrário é: "${palavraContraria}".`);
    }
}

function ordenacaoNumeros(){
    let listaNumeros = [];
    let numero = 0;
    let numeroTroca = 0;
    alert("Agora vamos ordenar 3 números a sua escolha.");
    for(let i = 1; i < 4; i++){
        numero = parseInt(prompt(`Insira um número ${i}: `));
        listaNumeros.push(numero);        
    }
    verificacao = true;
    while(verificacao){
        verificacao = false;
        for(let i = 0; i < 2; i++){
            if(listaNumeros[i] > listaNumeros[i+1]){
                numeroTroca = listaNumeros[i];
                listaNumeros[i] = listaNumeros[i+1];
                listaNumeros[i+1] = numeroTroca;
                verificacao = true;
            }
        }
    }
    alert(`A lista dos números escolhidos ordenada é: ${listaNumeros}`);
}


conferirPalindromo();
ordenacaoNumeros();
