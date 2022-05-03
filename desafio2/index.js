const nome = prompt('Qual é o seu nome?');
const idade = prompt('Quantos anos você tem?');
const linguagemProgramacao = prompt('Qual linguagem de programação você está usando?');

const msg = `Olá ${nome}, você tem ${idade} anos  e já está aprendendo ${linguagemProgramacao}`;

alert(msg);

//Exercício extra
const mensagemGostaDaLinguagem = prompt("Você gosta de estudar " + linguagemProgramacao + "? Responda com o número 1 para SIM ou 2 para NÃO");

if(mensagemGostaDaLinguagem == '1'){
    alert('Muito bom! Continue estudando que você terá muito sucesso!')
}else if (mensagemGostaDaLinguagem == '2'){
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
}else{
    alert('Por favor, responda com 1 para SIM ou 2 para NÃO')
}