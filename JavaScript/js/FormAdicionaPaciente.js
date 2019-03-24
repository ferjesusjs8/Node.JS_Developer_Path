
var botaoAdd = document.querySelector( '#adicionar_paciente' );
var botaoLimpar = document.querySelector( '#limpar_form' );

botaoAdd.addEventListener( "click", function( event ){

    event.preventDefault( );

    var tablePacientes = document.querySelector( "#tabela_pacientes" );
    var formAdicionaPaciente = document.querySelector( "#formAdiciona" );
    var erro = document.querySelector( ".messageError" );
    var paciente = ExtrairDadosFormulario( formAdicionaPaciente );
    RemoveMensagemErro(erro);
        
    if ( validaPessoa( paciente.nome, paciente.peso, paciente.altura ) ) {
        var trNovoPaciente = montaTr( paciente );
        tablePacientes.appendChild( trNovoPaciente );
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