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
//Função que torna o número inteiro e mostra no console
//Também mostra se é par
function tornandoInteiro(){
    //pega valor inserido na somavalores()
    let numero = document.getElementById('numero1').value;

    //apresenta o número como string
    console.log(`Esse número é uma string:`);
    console.log(numero);

    //apresenta o número inteiro 
    numero = parseInt(numero);
    console.log(`Esse número é um inteiro: `);
    console.log(numero);

    //confere se é impar ou par
    if(numero % 2 == 0){
        console.log(`O número ${numero} é par`);
    }else{
        console.log(`O número ${numero} é ímpar`);
    }
}

//Função subtração
function subtracao(){
    let n1 = parseInt(document.getElementById('calculadora1').value);
    let n2 = parseInt(document.getElementById('calculadora2').value);
    let resposta = n1 - n2;
    document.getElementById('resultadoCalc').textContent = `O resultado: ${resposta}`;
}

//função multiplicacao
function multiplicacao(){
    let n1 = parseInt(document.getElementById('calculadora1').value);
    let n2 = parseInt(document.getElementById('calculadora2').value);
    let resposta = n1 * n2;
    document.getElementById('resultadoCalc').textContent = `O resultado: ${resposta}`;
}
//Função adição
function soma(){
    let n1 = parseInt(document.getElementById('calculadora1').value);
    let n2 = parseInt(document.getElementById('calculadora2').value);
    let resposta = n1 + n2;
    document.getElementById('resultadoCalc').textContent = `O resultado: ${resposta}`;
}

//função multiplicacao
function divisao(){
    let n1 = parseInt(document.getElementById('calculadora1').value);
    let n2 = parseInt(document.getElementById('calculadora2').value);
    let resposta = n1 / n2;
    document.getElementById('resultadoCalc').textContent = `O resultado é: ${resposta}`;
}

//função zerar
function zerar(){
    document.getElementById('calculadora1').value = '';
    document.getElementById('calculadora2').value = '';
    document.getElementById('grau').value = '';
    
    document.getElementById('resultadoCalc').textContent = `O resultado é: _____________`;
    document.getElementById('resultadoGrau').textContent = `O resultado é: _____________`;

}

function celsius(){
    let grau = parseInt(document.getElementById('grau').value);
    let grauNovo = grau *1.8 + 32;
    document.getElementById('resultadoGrau').textContent = `O resultado é: ${grauNovo}`;
}

function fahrenheit(){
    let grau = parseInt(document.getElementById('grau').value);
    let grauNovo = (grau -32) / 1.8;
    document.getElementById('resultadoGrau').textContent = `O resultado é: ${grauNovo}`;
}

function embaralha (lista){
    for (let i = lista.length; i; i--){
        const iAleatorio = Math.floor(Math.random()*i);

        [lista[i - 1], lista[iAleatorio]] = [lista[iAleatorio],lista[i - 1]];
    }
}

//função para remover duplicatas de uma lista
function removerDuplicatas(lista){
    for(let i = 0; i < lista.length; i++){
        for(let j = i + 1; j < lista.length; j++){
            if(lista[i] == lista [j]){
                lista.splice(j,1);
                j--;
            }
        }
    }
}

//teste de concatenação de duas variaveis
minhaLista = [1,2,3,4,5];
listaSeguinte = [4,5,6,6];
novaLista = minhaLista.concat(listaSeguinte);
console.log(minhaLista);
console.log(listaSeguinte);
console.log(novaLista);

//teste de retirada de último elemento de uma lista
novaLista.splice(novaLista.length - 1,1);
console.log(novaLista);

//teste de embaralhamento
embaralha(novaLista);
console.log(novaLista);

//teste de remoção de duplicatas
removerDuplicatas(novaLista);
console.log(novaLista);