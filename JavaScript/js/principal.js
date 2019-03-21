
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var primeiroPaciente = document.querySelector("#primeiroPaciente");
var peso = primeiroPaciente.querySelector(".info-peso").textContent;
var altura = primeiroPaciente.querySelector(".info-altura").textContent;
var imc = primeiroPaciente.querySelector(".info-imc");
var calculoIMC = peso / (altura * altura);

imc.textContent = calculoIMC;

console.log(peso);
console.log(altura);
console.log(calculoIMC);