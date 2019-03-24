
var botaoAdd = document.querySelector( '#adicionar_paciente' );
var botaoLimpar = document.querySelector( '#limpar_form' );

botaoAdd.addEventListener( "click", function( event ){

    event.preventDefault( );

    var formAdicionaPaciente = document.querySelector( "#formAdiciona" );
    var erro = document.querySelector( ".messageError" );
    var paciente = ExtrairDadosFormulario( formAdicionaPaciente );
    RemoveMensagemErro(erro);
        
    if ( validaPessoa( paciente.nome, paciente.peso, paciente.altura ) ) {
        AdicionaPacienteNaTabela(paciente);
    }

    else {
        mensagemErro ( paciente.nome, paciente.peso, paciente.altura )
    }

    formAdicionaPaciente.reset( );
});

botaoLimpar.addEventListener( "click", function( event ){
    event.preventDefault( );
    var formAdicionaPaciente = document.querySelector( "#formAdiciona" );
    var erro = document.querySelector( ".messageError" );
    RemoveMensagemErro(erro);
    formAdicionaPaciente.reset( );
});

function ExtrairDadosFormulario( form ){

    var Paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        imc: CalculaIMC( form.peso.value, form.altura.value )
    };

    return Paciente;
}

function montaTr( paciente ){
    var tr = document.createElement( "tr" );
    tr.classList.add( "paciente" );

    tr.appendChild( montaTd( paciente.nome, "info-nome" ) );
    tr.appendChild( montaTd( paciente.peso, "info-peso" ) );
    tr.appendChild( montaTd( paciente.altura, "info-altura" ) );
    tr.appendChild( montaTd( paciente.imc, "info-IMC" ) );

    return tr;
}

function montaTd( dado, classe ){
    var td = document.createElement( "td" );
    td.classList.add( classe );
    td.textContent = dado;
    
    return td;
}

function RemoveMensagemErro( erro ) {
    erro.classList.remove("alert");
    erro.classList.remove("alert-danger");
    erro.innerHTML = "";
}

function AdicionaPacienteNaTabela( paciente ) {
    var trNovoPaciente = montaTr( paciente );
    var tablePacientes = document.querySelector( "#tabela_pacientes" );
    trNovoPaciente.classList.add("invisivel");
    tablePacientes.appendChild( trNovoPaciente );
        
    setTimeout(() => {
        trNovoPaciente.classList.remove("invisivel");
        trNovoPaciente.classList.add("fadeOut");
    }, 100);

    setTimeout(() => {
        trNovoPaciente.classList.add("fadeIn");
    }, 100);

}