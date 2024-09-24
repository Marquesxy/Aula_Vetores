/*Crie um algoritmo que leia o salário bruto de 5 pessoas, e ao final,
mostre o salario liquido de todos, considerando 12% de INSS a descontar*/
let PESSOAS = [];
let SALARIO = [];
let SALARIOLIQ = [];
for (let i = 0; i < 2; i++) {
    let pessoas = prompt("Informe o nome");
    if (pessoas === "" || (!isNaN(pessoas))) {
        alert("Nome Invalido")

    } else {
        PESSOAS.push(pessoas);

        let salario = Number(prompt(`Informe o salario de ${pessoas}`))
        if (isNaN(salario)) {
            alert("Salario invalido. Tente novamente");
        } else {
            SALARIO.push(salario);
        }
    }
    let INSS = SALARIO * 0.12
    let calculo = SALARIO - INSS
    SALARIOLIQ.push(calculo)
}

let mensagem = "";
mensagem += "Nomes " + PESSOAS.join(", ") + "<br></br>"
mensagem += "Salarios " + SALARIOLIQ.toFixed(2) + '<br></br>'

document.write(mensagem);
