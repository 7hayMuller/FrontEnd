var login = document.querySelector("#login");
var logout = document.querySelector("#logout");
var logoutLink = document.querySelector("#logout a")
var body = document.querySelector("body");


window.addEventListener('DOMContentLoaded', function(){

    var logado = JSON.parse(localStorage.getItem('logado')) || '';
    if (logado === '')
    {
        login.style.display = "block";
        logout.style.display = "none";
    }else{
        var span = document.createElement("span");
        span.className="glyphicon glyphicon-log-out";
        logoutLink.text = logado.nome + " ";
        logoutLink.appendChild(span);
        login.style.display = "none";
        logout.style.display = "block";
    }
})

logout.addEventListener('click', function(){
    localStorage.removeItem('logado');
    login.style.display = "block";
    logout.style.display = "none";
})