//Declaração de mensagem
let msg = "";
// Vetor de letras
let letras = [];
//Contagem de consoante das letras
let cont = 0;

//For de entrada de dados
//Vai repetir de 0 a 9, ou seja, 10 vezes
for (let i = 0; i < 10; i++) {
//Guardando as letras
    let val = prompt("Informe a Letra");
    letras[i] = val;
}
//For para a apresentação
//Vai repetir de 0 a 9, ou seja, 10 vezes
for (j = 0; j < 10; j++) {

    let val = letras[j].toUpperCase();
    if (!(val == "A" || val == "E" || val == "I" || val == "O" || val == "U")) {
        cont = cont + 1;
        msg += val + "\n";
    }
}
alert(msg + cont + " consoantes!");