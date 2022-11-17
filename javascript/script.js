document.getElementById("btn-login").addEventListener("click", login);
document.getElementById("btn-register").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Variables
var formulario_login = document.querySelector(".formulario-login");
var formulario_register = document.querySelector(".formulario-register");
var contenedor_login_register = document.querySelector(".contenedor-login-register");
var contenedor_apadtable_login = document.querySelector(".contenedor-login");
var contenedor_apadtable_register = document.querySelector(".contenedor-register");


function anchoPage(){

    if (window.innerWidth > 850){
        contenedor_apadtable_register.style.display = "block";
        contenedor_apadtable_login.style.display = "block";
    }else{
        contenedor_apadtable_register.style.display = "block";
        contenedor_apadtable_register.style.opacity = "1";
        contenedor_apadtable_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function login(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            contenedor_apadtable_register.style.opacity = "1";
            contenedor_apadtable_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            contenedor_apadtable_register.style.display = "block";
            contenedor_apadtable_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            contenedor_apadtable_register.style.opacity = "0";
            contenedor_apadtable_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            contenedor_apadtable_register.style.display = "none";
            contenedor_apadtable_login.style.display = "block";
            contenedor_apadtable_login.style.opacity = "1";
        }
}