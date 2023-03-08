
/* EXPORTAR ELEMENTOS DE HTML A JS POR MEDIO DE ID */

const user = document.getElementById("user");
const password = document.getElementById("password");
const correo = document.getElementById("correo");

/* DARLE UN FUNCIONAMIENTO DE AL SER CLICK  */

document.getElementById("register").addEventListener("click", register);
document.getElementById("login").addEventListener("click", login);
document.getElementById("ver").addEventListener("click", observar);



/* FUNCOION DE HACER REGISTRO  */

function register(event){

event.preventDefault();

  if(user.value.trim() ==="" || password.value.trim() =="" || correo.value.trim() ==="" ){
    swal({
      title:"Aviso!",
      text:"Favor de llenar los campos faltantes.",
      icon:"info",
      button:"Ir a llenarlos"
    });
    
  }else {


  swal({
    title: "Los datos se han guardado correctamente!",
    text: "Ya puedes iniciar sesion con los datos ingresados para el registro",
    icon:"success",
    buttons:{
      cancel:{
        text:"regresar para corregir datos",
        value: false,
        visible: true,
        className: "",
        closeModal: true
      },
        confirm:{
        text:"Continuar",
        value: true,
        visible: true,
        className: "",
        classModal: true
      }
    }
  }).then(function(value){
    if(value){
      location.reload()
    }else{
      swal({
        title: "NO SE A MODIFICADO NADA",
        text: "Los datos no se han guardado, puedes modificar algun dato si es que a si lo deceas",
        icon: "warning",
        button: "Ok"
      })
    }
  })
}
}


/* FUNCION DE INICIAR SESION  */

function login(event) {
event.preventDefault();

if (user.value.trim() === "" || password.value.trim() === "" || correo.value.trim() === "") {
swal({
  title: "Aviso!",
  text: "Favor de llenar los campos faltantes.",
  icon: "info",
  button: "Ir a llenarlos"
});
} else if(user.value==="Jorge Daniel" && password.value==="123" && correo.value==="moyvegeta9@gmail.com"){

swal({
  title: "Los datos estan correctos",
  text: "Iniciando sesión en el servidor...",
  icon: "success",
  button: "Aceptar",
  closeOnClickOutside: false,
  closeOnEsc: false,
  allowEscapeKey: false,
  allowOutsideClick: false,
  onOpen: () => {
    swal.showLoading();
  }
}).then(function () {
  swal.close();
  window.location.href = "acceso.html"
});
}else{
    swal({
        title: "Atencion",
        text: "Algunos de los datos que ingresaste, esta mal.",
        icon: "warning",
        button: "Aceptar"
    })
}
}

/* VERIFICAR SI EL ELEMENTO DEL INPUT TIENE ALGO DENTRO PARA NO HACER LA ANIMACION*/

const inputs = document.querySelectorAll('.input-style');
inputs.forEach(input => {
input.addEventListener('focus', function() {
this.nextElementSibling.classList.add('active');
});
input.addEventListener('blur', function() {
if (!this.value) {
  this.nextElementSibling.classList.remove('active');
}
});
});



/* FUNCION DE VER CONTRASEÑA  */

function observar() {

const show = document.getElementById("ver")

if(  password.value.trim() ===""){
swal({
  title: "Advertencia!",
  text: "No has escrito nada en el campo de password. No podemos mostrar el texto aun",
  icon: "warning",
  button: "Aceptar" 
});
}else{
if (password.type === "password") {
  password.type = "text";
  show.innerHTML = "Dejar de ver"

} else {
  password.type = "password";
  show.innerHTML = "Mostrar Contraseña"
}
}
  return false;
}


/* Validacion de datos del usuario */

    if(user.value==="jorge" && password.value==="123" && correo.value==="moyvegeta9@gmail.com"){
        swal({
            title: "Los datos estan bien, y podras continuar"
        })
    }