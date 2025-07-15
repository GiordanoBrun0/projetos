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
function numeroPositivo(numero){
    let mensagem = '';
    if(numero > 0){
        mensagem = 'O número é positivo';
    }else if(numero < 0){
        mensagem = 'O número é negativo';
    }else{
        mensagem = 'O número é zero';
    }
    console.log(mensagem);
}

function maiorIdade(idade){
    let mensagem = ''
    if(idade >= 18){
        mensagem = `'É maior de idade!'`;
    }else{
        mensagem = 'É menor de idade!';
    }
    console.log(mensagem);
}
//função que verifica se há valor na string
function stringVazia(texto){
    let mensagem = ''
    if (texto == ''){
        mensagem = 'String vazia';
    }else{
        mensagem = texto;
    }
    console.log(mensagem);
}

function anoBissexto(ano){
    let verificacao = (ano % 4 == 0 && ano % 100 !== 0) || ano % 400 == 0;
    if (verificacao){
        console.log(ano + ' é um ano bissexto.');
    }else{
        console.log(ano + ' não é ano bissexto.');
    }
}

function mediaDoisNumeros(n1, n2){
    if(n1 == 0 || n2 == 0){
        console.log('Insira o número em ambas as variaveis.');
        return;
    }
    let media = (n1 + n2) / 2;
    console.log(`A média de ${n1} e ${n2} é: ${media}.`);
}

function listaTamanho(lista){
    console.log('O tamanho da lista é: ' + lista.length);
}

function procurandoNaLista(elemento, lista) {
    if (lista.includes(elemento)) {
        let indices = [];
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] === elemento) {
                indices.push(i);
            }
        }
        const mensagem = indices.length > 1 ? 'nos índices' : 'no índice';
        console.log(`O elemento está ${mensagem}: ${indices}`);
    } else {
        console.log("Não há esse elemento na lista.");
    }
}

function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }

    return {
        somaPares,
        produtoImpares
    };
}
// Função que verifica se um objeto está presente no array
function verificarObjetoNoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}
/*
//teste  da função verificar objeto no array
const alunos = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'Pedro', idade: 21 },
    { id: 4, nome: 'Ana', idade: 19 }
];

const alunoProcurado = { id: 2, nome: 'Maria', idade: 22 };

const objetoEstaPresente = verificarObjetoNoArray(alunos, alunoProcurado);

if (objetoEstaPresente) {
    console.log('O aluno está presente no array.');
} else {
    console.log('O aluno não está presente no array.');
}


//teste da função calcular soma produto
const numeros = [1, 2, 3, 4, 5];
const resultado = calcularSomaProduto(numeros);
console.log("Soma dos pares:", resultado.somaPares);
console.log("Produto dos ímpares:", resultado.produtoImpares);

// Teste função de procurando na lista e seu tamanho
let minhaList = [1, 2, 3, 4, 5];
let procura = 4;
procurandoNaLista(procura, minhaList);
listaTamanho(minhaList);

let listaSeguint = [4, 5, 6, 6];
procura = 6;
procurandoNaLista(procura, listaSeguint);
listaTamanho(listaSeguint);

//teste de média de dois números
let n1 = 0;
let n2 = 1;
console.log(n1, n2); 
mediaDoisNumeros(n1, n2);

n1 = 1;
n2 = 0;
console.log(n1, n2); 
mediaDoisNumeros(n1, n2);

n1 = 7;
n2 = 8;
console.log(n1, n2); 
mediaDoisNumeros(n1, n2);

//teste de função ano bissexto
let ano = 2020;
anoBissexto(ano);
ano = 2024;
anoBissexto(ano);
ano = 2100;
anoBissexto(ano);
ano = 2000;
anoBissexto(ano);

//teste de função string vazia
let texto = '';
console.log(`Valor da String 1: `);
stringVazia(texto);
texto = 'E aí, tudo bem?';
console.log(`Valor da String 2: `);
stringVazia(texto);

//teste de função maior de idade
let idade = 18;
console.log(idade);
maiorIdade(idade);
idade = 35;
console.log(idade);
maiorIdade(idade);
idade = 12;
console.log(idade);
maiorIdade(idade);

//teste de função número positivo
let n = -1;
console.log(n);
numeroPositivo(n);
n = 55;
console.log(n);
numeroPositivo(n);
n = 0;
console.log(n);
numeroPositivo(n);

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
console.log(novaLista);*/