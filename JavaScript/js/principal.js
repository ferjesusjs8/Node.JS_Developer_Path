
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++)
{
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = paciente.querySelector(".info-imc");
    var pesoValido = true;
    var alturaValida = true;
    var msg = "";


    if (peso <= 0 || peso >= 1000){
        console.log("Peso inválido!");
        pesoValido = false;
        msg += "Peso não é valido! ";
    }

    if (altura <= 0 || altura >= 4){
        console.log("Altura inválido!");
        alturaValida = false;
        msg += "Altura não é valida! ";
    }

    if (pesoValido && alturaValida)
        msg += (peso / (altura * altura)).toFixed(2);

    imc.textContent = msg;

    console.log(peso);
    console.log(altura);
    console.log(msg);
}
