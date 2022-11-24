//eventos
document.getElementById("btn-login").addEventListener("click", login);
document.getElementById("btn-register").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Variables
var formulario_login = document.querySelector(".formulario-login");
var formulario_register = document.querySelector(".formulario-register");
var contenedor_login_register = document.querySelector(".contenedor-login-register");
var contenedor_apadtable_login = document.querySelector(".contenedor-login");
var contenedor_apadtable_register = document.querySelector(".contenedor-register");
var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var iban_regex = /([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{4})/g;
var swift_regex = /[A-Za-z0-9]{8,11}/g;


function anchoPage() {

    if (window.innerWidth > 850) {
        contenedor_apadtable_register.style.display = "block";
        contenedor_apadtable_login.style.display = "block";
    } else {
        contenedor_apadtable_register.style.display = "block";
        contenedor_apadtable_register.style.opacity = "1";
        contenedor_apadtable_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
    }
}

anchoPage();

//movimiento login y register
function login() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        contenedor_apadtable_register.style.opacity = "1";
        contenedor_apadtable_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        contenedor_apadtable_register.style.display = "block";
        contenedor_apadtable_login.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        contenedor_apadtable_register.style.opacity = "0";
        contenedor_apadtable_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        contenedor_apadtable_register.style.display = "none";
        contenedor_apadtable_login.style.display = "block";
        contenedor_apadtable_login.style.opacity = "1";
    }
}

//validaciones

const form = document.getElementById('form-rg');
const name = document.getElementById('namerg');
const email = document.getElementById('emailrg');
const user = document.getElementById('userrg');
const iban = document.getElementById('iban');
const swift = document.getElementById('swift');
const passwd = document.getElementById('passwdrg');
const correcto = document.getElementById('correcto');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    if(true){
        name.value = "";
        email.value = "";
        user.value = "";
        iban.value = "";
        swift.value = "";
        passwd.value = "";
        //alert("registro completado");
    }
});


/* funcion error form */
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

/* funcion success form */
const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

/* funcion validate form */
const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const userValue = user.value.trim();
    const ibanValue = iban.value.trim();
    const swiftValue = swift.value.trim();
    const passwdValue = passwd.value.trim();

    //validación nombre
    if(nameValue === ''){
        setError(name, 'Nombre vacio');
    } else{
        setSuccess(name, 'Nombre correcto');
        localStorage.setItem("nombre" ,nameValue);
    }
    //validación email
    if(!emailValue.match(email_regex)){
        setError(email, 'Email incorrecto formato (aaaa@aaaa.aaa)');
    } else {
        setSuccess(email, 'email correcto');
    }
    //validación user
    if(userValue === ''){
        setError(user, 'Usuario vacio');
    } else{
        setSuccess(user, 'Usuario correcto');
    }
    //validación iban
    if (ibanValue.length === 28){
        if (!ibanValue.match(iban_regex)) {
            setError(iban, 'IBAN no valido siga el formato');
        } else {
            setSuccess(iban, 'IBAN correcto');
        }
    } else {
        setError(iban, 'IBAN no valido siga el formato con los espacios');
    }
    //validación swift
    if(!swiftValue.match(swift_regex)){
        setError(swift, 'ejemplo: BBVAESMM');
      } else {
        setSuccess(swift, 'swift correcto');
      }
      //validación password
    if(passwdValue === '') {
        setError(passwd, 'Contraseña vacia');
    } else {
        setSuccess(passwd, 'Contraseña correcta');
    }

    return true
}

//LocalStorage register

function LocalStorage(e){
    event.preventDefault();

    var email = document.getElementById('emailrg').value;
    var passwd = document.getElementById('passwdrg').value;
    var user = document.getElementById('userrg').value;

/* no funciona
    var objectJson = {
        emailjson: email,
        userjson: user,
        passwdjson: passwd
    };

    var json = JSON.stringify(objectJson);
    */
    localStorage.setItem("email" ,email);
    localStorage.setItem("contraseña" ,passwd);
    localStorage.setItem("usuario" ,user);
    console.log('usuario añadido');
}

//LocalStorage Login
function loginLocalStorage(e){
    event.preventDefault();

    var emaillogin = document.getElementById('email').value;
    var passwdlogin = document.getElementById('passwd').value;
    var userlogin = document.getElementById('user').value;
    var result = document.getElementById('result');

    var email = localStorage.getItem("email");
    var passwd = localStorage.getItem("contraseña");
    var user = localStorage.getItem("usuario");

    if(email == null && passwd == null && user == null){
        result.innerHTML = 'Fallo crendenciales';
    } else if(emaillogin == email && passwdlogin == passwd && userlogin == user){
        result.innerHTML = 'Logeado';
        window.location.replace('htmls/instalaciones.html');
    } else {
        result.innerHTML = 'Fallo contraseña';
    }
}
