//Login
var loginform = document.querySelector("body #login form");
var email = document.querySelector("#login-email");
var senha = document.querySelector("#login-senha");
var error = document.querySelector( "#error" );

var dados = JSON.parse(localStorage.getItem('dados')) || [];

function logar(usuario){
    localStorage.setItem("logado", JSON.stringify(usuario))
}

loginform.addEventListener('submit', function(event){
    event.preventDefault();

    console.log(event);

    for( var i = 0; i < dados.length; i++)
    {
        console.log(email.value);
        console.log(senha.value);
        console.log(dados);

        if(dados[i].email === email.value && dados[i].senha === senha.value)
        {
            logar(dados[i]);
            window.location.replace("index.html");
            return;
        }
    }

    email.value= "";
    senha.value= "";
    error.style.display = "block";
})
