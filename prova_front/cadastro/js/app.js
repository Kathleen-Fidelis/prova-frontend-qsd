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



