import './style.css'

//se define la palabra que sera nuestra expresion regular
let expresionRegular = /expresiones/

//se crea una variable para el boton 
const boton_p = document.getElementById("boton")
boton_p.addEventListener("click", mostrarValor)

//variable parrafo para mostrar el texto
const parrafo = document.createElement('p')

//funcion para mostrar el valor: si alguna de las palabras ingresadas es nuestra expresion regular mostrara un mensaje sino mostrara otro
function mostrarValor() {
  //se crea la variable que recibe los datos del input
  const Input = document.getElementById("input");
  const cadena = Input.value;

  if (expresionRegular.test(cadena)){
    parrafo.textContent = 'Se encontro la palabra 👌'
  } 
  else{
    parrafo.textContent = 'Valio queso no esta 😒'
  }
}

//variables para el boton limpiar
const boton_l = document.getElementById("botonl")
boton_l.addEventListener("click", limpiarValor)

//funcion para limpiar input
function limpiarValor(){
  document.getElementById("input").value = ""
}

//se muestra el texto de la variable parrafo
document.body.appendChild(parrafo)