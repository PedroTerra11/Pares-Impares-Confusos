const prompt = require('prompt-sync')();
let num;
let numero;
let soma = 0

num = prompt("Digite um número")

if(isNaN(Number(num))){
    console.log("Número inválido")
}else{
    numero = num.split("")

    for(let i = 0; i < numero.length; i++){
        soma += parseInt(numero[i]);
    }
}

if(soma % 2 == 0){
    console.log("O numero é ímpar..")
}else
    console.log("O numéro é par")






