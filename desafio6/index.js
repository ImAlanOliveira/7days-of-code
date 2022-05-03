let listaDeCompras = [
    frutas = [],
    laticinios = [],
    congelados = [],
    doces = []
]
let adicionarItem = "";
let adicionar;

for (let desejaAdicionar = ""; desejaAdicionar = "sim"; desejaAdicionar ++){
desejaAdicionar = prompt('Você deseja adicionar uma comida na sua lista de compras? Responda com "sim" ou "não"');

if (adicionarItem != ""){
    let desejaRemover = prompt('Antes de adicionarmos mais algum item, você deseja remover algum item da sua lista? Responda com "sim ou não"');
    if(desejaRemover == "sim"){
    let remover = prompt(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n Qual item você deseja remover?`)
    
        //dentro de frutas procurar um valor, esse valor é o que eu digitar em remover
    if (frutas.indexOf(remover) != -1){ //diferente de -1 pois caso o valor de um array não seja encontrado pelo indexOf ele retorna -1
        frutas.splice(frutas.indexOf(remover), 1); //o splice é pra remover um item e utilizei da seguinte forma, dentro de frutas é pra procurar um valor, o valor digitado na variável remover por isso remover está entre parênteses, e o número 1 indica que quero remover somente 1 item a partir do que eu falei, que no caso vai remover só o que o usuário digitar
        alert(`${remover} foi removido da sua lista de compras.`)
    }else if (laticinios.indexOf(remover) != -1){
        laticinios.splice(laticinios.indexOf(remover), 1);
        alert(`${remover} foi removido da sua lista de compras.`)
    }else if(congelados.indexOf(remover) != -1){
        congelados.splice(congelados.indexOf(remover), 1); //splice -> Quero remover o item, congelados.indexOf -> buscar esse item dentro de congelados o valor que eu digitar em (remover), 1 -> remover apenas 1 item a partir do que eu digitei
        alert(`${remover} foi removido da sua lista de compras.`)
    }else if(doces.indexOf(remover) != -1){
        doces.splice(doces.indexOf(remover), 1)
        alert(`${remover} foi removido da sua lista de compras.`)
    }

}
}
if(desejaAdicionar == "sim"){
    adicionarItem = prompt('Qual item você deseja adicionar?');
    let categoriaDoProduto = prompt('Digite a categoria que você deseja colocar o item: frutas, laticínios, congelados ou doces.')

    if(categoriaDoProduto == "frutas"){
        adicionar = listaDeCompras[0].push(adicionarItem);
        alert(`${adicionarItem} foi adicionado em frutas.`)
        console.log(frutas);
    }else if(categoriaDoProduto == "laticínios"){
        adicionar = listaDeCompras[1].push(adicionarItem);
        alert(`${adicionarItem} foi adicionado em laticínios.`);
        console.log(laticinios);
    }else if (categoriaDoProduto == "congelados"){
        adicionar = listaDeCompras[2].push(adicionarItem);
        alert(`${adicionarItem} foi adicionado em congelados.`);
    }else if (categoriaDoProduto == "doces"){
        adicionar = listaDeCompras[3].push(adicionarItem);
        alert(`${adicionarItem} foi adicionado em doces.`)
    }

}else if (desejaAdicionar == "não"){
    alert(`Sua lista de compras ficou da seguinte forma:
    Frutas: ${listaDeCompras[0]}
    Laticínios: ${listaDeCompras[1]}
    Congelados: ${listaDeCompras[2]}
    Doces: ${listaDeCompras[3]} `)
    break;
}

}