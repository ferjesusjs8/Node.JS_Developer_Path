var botao = document.querySelector('#adicionar_paciente');

botao.addEventListener("click", function(event){

    event.preventDefault();

    var tablePacientes = document.querySelector("#tabela_pacientes");

    var formAdicionaPaciente = document.querySelector("#formAdiciona");

    var erro = document.querySelector(".messageError");

    var trNovoPaciente = document.createElement("tr");

    var tdNome = document.createElement("td");
    var tdPeso = document.createElement("td");
    var tdAltura = document.createElement("td");
    var tdIMC = document.createElement("td");

    var nome = formAdicionaPaciente.nome.value;
    var peso = formAdicionaPaciente.peso.value;
    var altura = formAdicionaPaciente.altura.value;
    var imc = CalculaIMC(peso, altura);

    

    if ( VerificarPesoAltura(nome, peso, altura) ) {
        tdNome.textContent = nome;
        tdPeso.textContent = peso;
        tdAltura.textContent = altura;
        tdIMC.textContent = imc;

        trNovoPaciente.appendChild(tdNome);
        trNovoPaciente.appendChild(tdPeso);
        trNovoPaciente.appendChild(tdAltura);
        trNovoPaciente.appendChild(tdIMC);
    
        tablePacientes.appendChild(trNovoPaciente);
        erro.textContent = "";

        formAdicionaPaciente.nome.value = "";
        formAdicionaPaciente.peso.value = "";
        formAdicionaPaciente.altura.value = "";
    }

    else {
        erro.textContent = "Erro: Dados Inválidos! Verifique os valores digitados!";
    }
});

function VerificarPesoAltura(nome, peso, altura){
    return ( ( nome && peso && altura ) 
        && ( peso > 0 && peso < 500 && altura > 0 && altura < 4 )
        && ( !isNaN(peso) && !isNaN(altura) )
        && ( isNaN(nome) ) 
        );
}