    
async function criar(){
    const inputNome = document.getElementById("inputNome");
    const nome = inputNome.value

    const inputEmail = document.getElementById("inputEmail");
    const email = inputEmail.value

    const inputSenha = document.getElementById("inputSenha");
    const senha = inputSenha.value
   
    const url= "http://localhost:3000/usuario"
    fetch( url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome, 
            email,
            senha
        })
    })
    .then(res => res.json())
    .then(res => {console.log(res);
        if(res.user){
            window.alert("Usuário criado com sucesso, Faça a login para continuar.");
        }else{
            window.alert("O usuário não pode ser criado, tente novamente.")
    }

    })
    
 }
