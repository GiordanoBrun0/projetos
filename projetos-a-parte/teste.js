//Função de confeência de números
function conferirPalindromo() {
    //Avisa usuario e solicita palavra de conferência
    alert('Vamos conferir se a palavra inserida é um palíndromo:');
    let palavra = prompt("Insira a palavra: ");
    let palavraContraria = '';

    //inverte a palavra
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraContraria += palavra.charAt(i);
    }

    //a partir da inversão confere se a palavra é a mesma que inversão dela
    //adicionado detalhe de maiuscula para não da choque de informação
    if (palavra.toUpperCase() === palavraContraria.toUpperCase()) {
        alert(`A palavra "${palavra}" é um palíndromo.`);
    } else {
        alert(`A palavra "${palavra}" NÃO é um palíndromo. Seu contrário é: "${palavraContraria}".`);
    }
}

//função de ordenação
function ordenacaoNumeros(){
    
    //declaração de variaveis
    let listaNumeros = [];
    let numero = 0;
    let numeroTroca = 0;

    //informa usuario sobre inclusão de 3 números
    alert("Agora vamos ordenar 3 números a sua escolha.");
    
    //guarda os numeros solicitados em uma lista
    for(let i = 1; i < 4; i++){
        numero = parseInt(prompt(`Insira um número ${i}: `));
        listaNumeros.push(numero);        
    }

    //verificação da lista entre seus valores e atualização
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
    //apresentar os dados conforme os números inseridos
    alert(`A lista dos números escolhidos ordenada é: ${listaNumeros}`);
}

//função de inserir valores nome e idade 
function insiraValores(){
    //Coloca em variaveis os valores incluidos no HTML
    let nome = document.getElementById('nomeUsuario').value;
    let idade = document.getElementById('idadeUsuario').value;
    let textoCargo = document.getElementById('cargoDeTrabalho').value;
    let cargo = textoCargo.split(';')[0];
    let salario = parseInt(textoCargo.split(';')[1]);

    //Separa as respostas e reorganiza no HTML
    document.getElementById('respostaNome').textContent = `Seu nome: ${nome}`;
    document.getElementById('respostaIdade').textContent = `Sua idade: ${idade}`;
    document.getElementById('respostaCargo').textContent = `Seu trabalho: ${cargo}`;
    document.getElementById('resultadoSalario').textContent = `Seu salario: ${salario}`;

}

//coloca lista de números no console
function listaDeNumeros(){
    //recupera os valores incluidos 
    let numero = document.getElementById('numeros').value.trim();

    // separa eles pelas vírgulas e cria uma lista
    const arrayNumeros = numero.split(',');

    //insere números no console
    console.log(arrayNumeros);
    
}
//Função que recebe dois valores de números e soma
function somaValores(){
    //recupera os valores do html e soma eles
    let n1 = parseInt(document.getElementById('numero1').value);
    let n2 = parseInt(document.getElementById('numero2').value);
    let resultado = n1+n2;
    
    //retorna a resposta conforme solicitado
    document.getElementById('respostaSoma').textContent = `A soma de n1 e n2 é: ${resultado}`;
}