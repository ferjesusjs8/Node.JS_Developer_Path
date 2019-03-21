
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var primeiroPaciente = document.querySelector("#primeiroPaciente");
var peso = primeiroPaciente.querySelector(".info-peso").textContent;
var altura = primeiroPaciente.querySelector(".info-altura").textContent;
var imc = primeiroPaciente.querySelector(".info-imc");
var pesoValido = true;
var alturaValida = true;
var msg = "";


if (peso <= 0 || peso >= 1000)
{
    console.log("Peso inválido!");
    pesoValido = false;
    msg += "Peso não é valido! ";
}

if (altura <= 0 || altura >= 4)
{
    console.log("Altura inválido!");
    alturaValida = false;
    msg += "Altura não é valida! ";
}

if (pesoValido && alturaValida)
    msg += peso / (altura * altura);

imc.textContent = msg;

console.log(peso);
console.log(altura);
console.log(msg);