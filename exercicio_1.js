/*Crie um algoritmo que leia um vetor de 5 números
 inteiros e mostre-os*/

 //Definição da variavel juntamente com o vetor 
 let num = [];

 num [0] = prompt ("Informe o 1° Numero");
 num [1] = prompt ("Informe o 2° Numero");
 num [2] = prompt ("Informe o 3° Numero");
 num [3] = prompt ("Informe o 4° Numero");
 num [4] = prompt ("Informe o 5° Numero");

 let mensagem = 
    `${num[0]}, ${num[1]}, ${num[2]}, ${num[3]}, ${num[4]}`;

 /* modo 1
    let mensagem2 =
    num[0] + ", " + num[1] + ", " +
    num[2] + ", " + num[3] + ", " + "e " + num[4];

    alert (mensagem2);*/
    
    alert (mensagem);

    
    
    
    
    
    
    
    /* Modo inteligente
    let num = [];
let mensagem = "";
let numerostr = "";
// leitura dos numeros nos espaços
for (let i = 0; i < 5; i += 1) {
    numerostr = prompt("Informe um número:");
    num.push(numerostr);
}

for (let i = 0; i < num.length; i++) {

    // O total de Elementos - 1 equivale a ultima posição do vetor.
    // Ex: 5 valores no vetor, vai de 0 a 4 posições [0,1,2,3,4]. 
    // O objetivo é inserir o ponto final no ultimo valor no texto.
    let ultimaPosicao = (num.length - 1); 
    
    if(i == ultimaPosicao)
        mensagem += num[i] + ".";
    else
        mensagem += num[i] + ", ";    
}
alert(mensagem);*/