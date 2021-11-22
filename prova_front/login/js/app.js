let inputLogin = document.getElementById("login")

inputLogin.onclick = function() {
    alert("Login efetuado com sucesso")
}


let inputSenha = document.getElementById("senha")

inputSenha.onclick = function() {
//     let msgSenhaErro = document.querySelector(".msg-senha-erro")
//     let msgSenhaOk = document.querySelector(".msg-senha-sucesso")

//     if (senha.value.length < 8) {
//         msgSenhaErro.style.display = "none";
//         msgSenhaOk.style.display = "block";
//     } else {
//         msgSenhaOk.style.display = "none";
//         msgSenhaErro.style.display = "block";
//     }
    
    if (senha.value.length < 8){
        console.log("senha inválida")
    }else{
        console.log("senha válida")
    }
}