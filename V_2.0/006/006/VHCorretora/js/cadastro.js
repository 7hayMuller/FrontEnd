var cadastroForm = document.querySelector("body #cadastro form");
var nome = document.querySelector( "#nome_cad" );
var email_cad = document.querySelector( "#email_cad" );
var senha_cad = document.querySelector( "#senha_cad" );

var dados = JSON.parse(localStorage.getItem('dados')) || [];

function atualizarDados(usuario){
    dados.push(usuario);
    localStorage.setItem("dados", JSON.stringify(dados));
}

function logar(usuario){
    localStorage.setItem("logado", JSON.stringify(usuario))
}

cadastroForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    var usuario = {
        nome: nome.value,
        email: email_cad.value,
        senha: senha_cad.value
    }

    atualizarDados(usuario);
    logar(usuario);
    window.location.replace("index.html");
})
