function comprar(){
    //separando variaveis nome ingresso, quant comprada e quant ingressos disponivel
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantIngressos = parseInt(document.getElementById('qtd').value);
    let quantidade = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);

    //se a quant de ingressos disponiveis menor que ingressos comprados
    //ou menor que 0
    if(quantIngressos < 0 ){
        alert("A quantidade de ingressos deve ser positiva.");
        return;
    }else if(quantidade - quantIngressos < 0){
        //solicita outro local
        alert("Não há uma quantidade suficiente. Insira pra outro lugar.");
        quantidade = 0
        return;
    }
    //continua a ação pra saber o quanto de ingressos disponiveis continua
    let resultado = quantidade - quantIngressos;
    alert('Compra realizado com sucesso.');
    //atualiza valores dos ingressos disponiveis
    document.getElementById(`qtd-${tipoIngresso}`).textContent = resultado;
    document.getElementById('qtd').value = 0;
}