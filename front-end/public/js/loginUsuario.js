document.addEventListener("DOMContentLoaded", function() {
    console.log("Entrei login");
})

async function login(){
    const inputEmail= document.getElementById("input-email")
    const email = inputEmail.value

    const inputSenha= document.getElementById("input-senha")
    const senha = inputSenha.value
    
 console.log(email,senha)
   
   await fetch("http://localhost:3000/login",{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
            email,
            senha
        })
   })
    .then(res => res.json())
    .then(res => {
        //console.log(res);
        if(res.usuario){
            window.location.href= "http://localhost:4000/agendamento";
        }else{
        window.alert("Error: Senha ou email invalidos!!!")
       
        }
    })

   
}
