
var botao = document.querySelector( '#adicionar_paciente' );

botao.addEventListener( "click", function( event ){

    event.preventDefault( );

    var tablePacientes = document.querySelector( "#tabela_pacientes" );
    var formAdicionaPaciente = document.querySelector( "#formAdiciona" );
    var erro = document.querySelector( ".messageError" );
    var paciente = ExtrairDadosFormulario( formAdicionaPaciente );

    if ( VerificarPesoAltura( paciente.nome, paciente.peso, paciente.altura ) ) {
        var trNovoPaciente = montaTr( paciente );
        tablePacientes.appendChild( trNovoPaciente );
        erro.textContent = "";
    }

    else {
        erro.textContent = "Erro: Dados Inválidos! Verifique os valores digitados!";
    }

    formAdicionaPaciente.reset( );
});

function VerificarPesoAltura( nome, peso, altura ){
    return ( ( nome && peso && altura ) 
        && ( peso > 0 && peso < 500 && altura > 0 && altura < 4 )
        && ( !isNaN( peso ) && !isNaN( altura ) )
        && ( isNaN( nome ) ) 
        );
}

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