
var titulo = document.querySelector(".titulo");
titulo.textContent = "Fernando JS Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++)
{
    var paciente = pacientes[i];

    var nome = paciente.querySelector(".info-nome");
    var peso = paciente.querySelector(".info-peso");
    var altura = paciente.querySelector(".info-altura");
    var imc = paciente.querySelector(".info-imc");

    if  ( validaPessoa( nome.textContent, peso.textContent, altura.textContent ) )
        imc.textContent = CalculaIMC( peso.textContent, altura.textContent );
};

function validaPeso ( peso ) {
    return ( peso && peso > 0 && peso < 500 && !isNaN( peso ) );
}

function validaAltura ( altura ) {
    return ( altura && altura > 0 && altura < 4 && !isNaN( altura ) );
}

function validaNome ( nome ) {
    return ( nome && isNaN( nome ) );
}

function mensagemErro ( nome, peso, altura ) {

    var mensagens = [];

    if( !validaNome( nome ) )
        mensagens.push( "Nome inválido!" ); 

    if( !validaPeso( peso ) )
        mensagens.push( "Peso inválido!" ); 

    if( !validaAltura( altura ) )
        mensagens.push( "Altura inválida!" ); 

    var ul = document.querySelector(".messageError");
    
    if ( mensagens.length > 0 ){
        ul.classList.add("alert");
        ul.classList.add("alert-danger");
    }

    mensagens.forEach(function (mensagem){
        var li = document.createElement("li");
        li.textContent = mensagem;
        ul.appendChild(li);
    });

    return mensagens.length > 0;
}

function CalculaIMC( peso, altura ){

    var imc = 0;

    imc = ( peso / ( altura * altura ) ).toFixed( 2 );

    return imc;
}

function validaPessoa( nome, peso, altura ) {
    return ( validaNome( nome ) && validaPeso( peso ) && validaAltura( altura ) );
}