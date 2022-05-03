let numeroSorteado = parseInt(Math.random()*11);


let tentativas;

for (tentativas = 2; tentativas >= 0; tentativas--){
console.log(tentativas)
let advinhe = prompt('Advinhe em 3 tentativas qual número eu estou pensando! Dica: é um numero de 0 a 10');

if (advinhe == numeroSorteado){
    alert(`Parabéns! Você acertou! O número era ${numeroSorteado}`)
    break;

}else if (advinhe < numeroSorteado){
    alert(`Tente um número um pouco mais alto! Restam ${tentativas} tentativas!`);
}else if (advinhe > numeroSorteado){
    alert(`Tente um número um pouco mais baixo! Restam ${tentativas} tentantivas!`);
}else if (advinhe != numeroSorteado && tentativas == 1){
    alert(`Respire fundo, você só tem mais 1 tentativa! Vamos lá`)
}

if (tentativas == 0){
    alert(`Suas tentativas acabaram :( eu tinha pensado no número ${numeroSorteado}`)
}

}