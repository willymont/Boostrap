document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", registrer);
window.addEventListener("resize", anchoPagina);

//Declaración de variables
var contenedor_login_registrer = document.querySelector(".contenedor__login-registrer");
var formulario_login = document.querySelector(".formulario__login");
var formulario_registrer = document.querySelector(".formulario__registrer");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_registrer = document.querySelector(".caja__trasera-registrer");

function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_registrer.style.display = "block";
    }else{
        caja_trasera_registrer.style.display = "block";
        caja_trasera_registrer.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_registrer.style.display = "none";
        contenedor_login_registrer.style.left = "0px";
    }
}

anchoPagina();

function iniciarSesion(){

    if(window.innerWidth > 850){
        formulario_registrer.style.display = "none";
        contenedor_login_registrer.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_registrer.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";   
    }else{
        formulario_registrer.style.display = "none";
        contenedor_login_registrer.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_registrer.style.display = "block";
        caja_trasera_login.style.display = "none";  
    }
    
}

function registrer(){

    if(window.innerWidth > 850){
        formulario_registrer.style.display = "block";
        contenedor_login_registrer.style.left = "410px";
        formulario_login.style.display = "nome";
        caja_trasera_registrer.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_registrer.style.display = "block";
        contenedor_login_registrer.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_registrer.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";  
    }
    
}