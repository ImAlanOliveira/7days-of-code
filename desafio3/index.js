const area = prompt('Olá, você quer seguir para a área de Front-End ou Back-End?');

if (area == 'Front-End' || area == 'front-end' || area == 'Front-end'){
    prompt('Front-End? Que legal! Temos duas tecnologias para você, gostaria de aprender React ou aprender Vue?')

    const areaDesejada = prompt(`Digite 1 se você gostaria de seguir se especializando em ${area} ou digite 2 para seguir se desenvolvendo para se tornar Fullstack`);

    if (areaDesejada == 1){
        alert('Lhe desejo sorte em sua jornada para dominar o Front-End');
    }else if (areaDesejada == 2){
        alert ('O caminho para o Fullstack é árduo porém a recompensa é grande, lhe desejo sorte jovem programador(a).')
    }

}else if (area == 'Back-End' || area == 'back-end' || area == 'Back-end'){
    prompt('Back-End? Que legal! Temos duas tecnologias para você, gostaria de aprender C# ou aprender Java?')

    const areaDesejada = prompt(`Digite 1 se você gostaria de seguir se especializando em ${area} ou digite 2 para seguir se desenvolvendo para se tornar Fullstack`)

    if (areaDesejada == 1){
        alert('Lhe desejo sorte em sua jornada para dominar o Back-end')
    }else if (areaDesejada == 2){
        alert ('O caminho para o Fullstack é árduo porém a recompensa é grande, lhe desejo sorte jovem programador(a).')
    }
}


for (var tecnologiaParaSeEspecializar = 'SIM'; tecnologiaParaSeEspecializar = 'SIM'; tecnologiaParaSeEspecializar++){

    tecnologiaParaSeEspecializar = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Responda com SIM ou NÃO');

    if(tecnologiaParaSeEspecializar == 'SIM' || tecnologiaParaSeEspecializar == 'sim'){
        var tecnologia = prompt('Qual tecnologia?');
        alert(`${tecnologia} é uma ótima tecnologia para se aprender, boa sorte nos estudos!`)
        
    }else if (tecnologiaParaSeEspecializar == 'NÃO' || tecnologiaParaSeEspecializar == 'não'){
        alert('Lhe desejo uma boa jornada de estudos, volte sempre que desejar conversar!')
        break;
        
    }else{
        alert('Responda com SIM ou NÃO')
    }
}
