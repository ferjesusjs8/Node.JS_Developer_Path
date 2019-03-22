
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++)
{
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso");
    var altura = paciente.querySelector(".info-altura");
    var imc = paciente.querySelector(".info-imc");
    var pesoValido = true;
    var alturaValida = true;
    var msg = "";


    if (peso.textContent <= 0 || peso.textContent >= 1000){
        console.log("Peso inválido!");
        pesoValido = false;
        msg += "Peso não é valido! ";
        paciente.classList.add("pacienteInvalido");
        peso.classList.add("atributoComErro");
    }

    if (altura.textContent <= 0 || altura.textContent >= 4){
        console.log("Altura inválido!");
        alturaValida = false;
        msg += "Altura não é valida! ";
        paciente.classList.add("pacienteInvalido");
        altura.classList.add("atributoComErro");
    }

    if (pesoValido && alturaValida)
        msg += (peso.textContent / (altura.textContent * altura.textContent)).toFixed(2);

    imc.textContent = msg;
};

var botao = document.querySelector('#adicionar_paciente');
botao.addEventListener("click", function(event){
    event.preventDefault();
    console.log("clicou!");
});