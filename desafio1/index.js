let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

let stringEmNumero = parseFloat(stringUm);
console.log(stringUm);
console.log(stringEmNumero);
console.log(numeroUm);

if (numeroUm === stringUm){
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor e o mesmo tipo');
}else if (numeroUm == stringUm){
    console.log('As variáveis numeroUm e sintrUm tem o mesmo valor porém tipos diferentes');
}

if(numeroTrinta !== stringTrinta){
    console.log('As variáveis numeroTrinta e stringTrint tem o mesmo valor, mas tipos diferentes');
}else{
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
}


let soma = numeroUm + stringUm;
console.log(soma);

let soma2 = numeroUm + stringEmNumero;
console.log(soma2);


let verificacao = numeroTrinta == stringTrinta;
console.log(verificacao);