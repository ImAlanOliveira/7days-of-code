//perguntar se o usuário deseja adicionar uma comida na sua lista de compras
//em seguida perguntar qual comida ele deseja inserir
//perguntar em qual categoria essa comida se encaixa
//exibir uma lista com todos os itens agrupados

let listaDeCompras = [
    frutas = [],
    laticinios = [],
    congelados = [],
    doces = []
]

let adicionarItem = "";
let categoriaDoProduto = "";
let adicionar;

for (let desejaAdicionar = ""; desejaAdicionar = "sim"; desejaAdicionar ++){
desejaAdicionar = prompt('Você deseja adicionar uma comida na sua lista de compras? Responda com "sim" ou "não"');

if(desejaAdicionar == "sim"){
    adicionarItem = prompt('Qual item você deseja adicionar?');
    categoriaDoProduto = prompt('Digite a categoria que você deseja colocar o item: frutas, laticínios, congelados ou doces.')

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