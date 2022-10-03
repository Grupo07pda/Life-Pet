document.addEventListener('DOMContentLoaded', function() {
    console.log("Entrei serviços")
})

async function criando(){
    const inputAnimal = document.getElementById("animal");
    const animal = inputAnimal.value;
    const inputServico = document.getElementById("servico");
    const servicos =inputServico.value;
    const inputPorte = document.getElementById("porte");
    const porte =inputPorte.value;
    const inputEspecie = document.getElementById("especie");
    const especie =inputEspecie.value;
    const inputNome = document.getElementById("nome");
    const nome =inputNome.value;
    const inputCpf = document.getElementById("cpf");
    const cpf =inputCpf.value;
    const inputTelefone = document.getElementById("telefone");
    const telefone =inputTelefone.value;
    const inputdata = document.getElementById("data");
    const data =inputdata.value;
    
    const url = "http://localhost:3000/servico"
    fetch( url,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
                nome_animal:animal,
                servicos,
                 porte,
                 especie,
                 nome_dono:nome,
                 cpf,
                 telefone,
                 horario:data
             })
    })
    .then(res => res.json())
    .then(res => {console.log(res);
        if(res.servico){
            window.alert("Agendamento Finalizado");
        }else{
        window.alert("Erro no agendamento, tente novamente.")
        }
    })
    
}