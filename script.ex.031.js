function jogar(escolhaDoUsuario){
    var resultado = document.getElementById('resultado')
    var escolhasPossiveis = ['Pedra','Papel','Tesoura']
    var escolhaDoComputador = escolhasPossiveis[Math.floor(Math.random() * escolhasPossiveis.length)];

    if(escolhaDoUsuario === escolhaDoComputador){
        resultado.innerHTML = `<strong>EMPATE!</strong>. Você e o Computador fizeram a mesma escolha!`
    }else if
    (escolhaDoUsuario === 'Pedra' && escolhaDoComputador === 'Tesoura'|| escolhaDoUsuario === 'Papel' && escolhaDoComputador === 'Pedra' || escolhaDoUsuario === 'Tesoura' && escolhaDoComputador === 'Papel'){
        resultado.innerHTML = `Você <strong>ganhou!</strong> O Computador escolheu <strong>${escolhaDoComputador}</strong> e <strong>${escolhaDoUsuario}</strong> vence <strong>${escolhaDoComputador}</strong>`
    }else{
        resultado.innerHTML = `Você <strong>perdeu!</strong> O Computador escolheu <strong>${escolhaDoComputador}</strong> e <strong>${escolhaDoUsuario}</strong> perde para <strong>${escolhaDoComputador}</strong>`
    }
}
