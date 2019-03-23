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

    

    if ( VerificarPesoAltura(peso, altura) ) {
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

    }

    else {
        erro.textContent = "Erro: Dados Inválidos!";
    }
});