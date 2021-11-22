let inputCpf = document.getElementById("cpf")

inputCpf.onblur = function() {
    let regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    let msgCpfError = document.querySelector(".msg-cpf.msg-error");
    let msgCpfOK = document.querySelector(".msg-cpf.msg-success");

    if (regexCpf.test(inputCpf.value)) {
        msgCpfError.style.display = "none";
        msgCpfOK.style.display = "block";
    } else {
        msgCpfOK.style.display = "none";
        msgCpfError.style.display = "block";
    }
}

let inputCep = document.getElementById("cep")

inputCep.onblur = function() {
    let regexCep = /[0-9]{5}-[0-9]{3}/;
    let msgCepError = document.querySelector(".msg-cep.msg-error");
    let msgCepOK = document.querySelector(".msg-cep.msg-success");

    if (regexCep.test(inputCep.value)) {
        msgCepError.style.display = "none";
        msgCepOK.style.display = "block";
    } else {
        msgCepOK.style.display = "none";
        msgCepError.style.display = "block";
    }
}

let inputRg = document.getElementById("rg")

inputRg.onblur = function() {
    let regexRg = /(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)/;
    let msgRgError = document.querySelector(".msg-rg.msg-error");
    let msgRgOK = document.querySelector(".msg-rg.msg-success");

    if (regexRg.test(inputRg.value)) {
        msgRgError.style.display = "none";
        msgRgOK.style.display = "block";
    } else {
        msgRgOK.style.display = "none";
        msgRgError.style.display = "block";
    }
}

// let inputNome = document.getElementById("nome")

// inputNome.onblur = function() {
//     let regexNome = /[A-Z][a-z].* [A-Z][a-z].*/;
//     let msgNomeError = document.querySelector(".msg-nome.msg-error");
//     let msgNomeOK = document.querySelector(".msg-nome.msg-success");

//     if (regexNome.test(inputNome.value)) {
//         msgNomeError.style.display = "none";
//         msgNomeOK.style.display = "block";
//     } else {
//         msgNomeOK.style.display = "none";
//         msgNomeError.style.display = "block";
//     }
// }

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
