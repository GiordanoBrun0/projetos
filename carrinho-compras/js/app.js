let totalProdutos = 0;
//função para pegar valores e adicionar
function adicionar(){
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade').value;

    //Proteção para o usuário não colocar valores invalidos
    if(quantidadeProduto == '' || quantidadeProduto == 0){
        alert("Insira um valor na quantidade!");
        return;
    }

    //multiplicação da quantidade com o valor
    let preco = quantidadeProduto * valorProduto;
    
    //adicionar novo elemento no carrinho
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`

    //adicionar a soma dos valores
    totalProdutos = totalProdutos + preco;
    let totalHTML = document.getElementById('valor-total');
    totalHTML.textContent = `R$ ${totalProdutos}`;
    document.getElementById('quantidade').value = 0;
    
}
//função para pegar valores incluidos e excluir
function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';;
    document.getElementById('quantidade').value = 0;
    document.getElementById('valor-total').textContent = 'R$ 0';
    totalProdutos = 0;
}
