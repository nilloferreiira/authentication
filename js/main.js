function logar () {
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if(email.value =="email" && senha.value == "senha"){
        window.location.href = "acesso.html"
    }
    else {
        alert('acesso negado')
    }
}

function goBack() {
    window.history.back()
}