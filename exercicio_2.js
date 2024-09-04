/* Crie m algoritimo que leia 4 notas, 
mostre as notas e a média na tela.*/
let notas = [];
let soma = 0;
let mensagem = "";

    for (let i = 0; i < 4; i++) {    
        notas [i] = prompt ("Informe a Nota");
        soma += parseFloat (notas[i]);
    }
    for (let j = 0; j < 4; j += 1) {
        mensagem += notas [j] +  "\n";
    }
    let media = soma / 4;
    alert (`Notas ${mensagem}Média é ${media}`);