const boton1= document.getElementById("boton1")
const boton2= document.getElementById("boton2")

const contenedor= document.querySelector(".container")
const contenedor1= document.querySelector(".container1")
const contenedor2= document.querySelector(".container2")

// Boton1

boton1.addEventListener("click", function(){
    contenedor.style.background="green"
    contenedor.style.height="15vh"
    contenedor.style.border="2px solid blue"
})

boton1.addEventListener("click", function(){
    contenedor1.style.background="green"
    contenedor1.style.width="100%"
    contenedor1.style.height="15vh"
    contenedor1.style.border="2px solid blue"
    
})

boton1.addEventListener("click", function(){
    contenedor2.style.background="green"
    contenedor2.style.width="100%"
    contenedor2.style.height="15vh"
    contenedor2.style.border="2px solid blue"
})

// Boton2

boton2.addEventListener("click", function(){
    contenedor.style.background="red"
    contenedor.style.height="20vh"
    contenedor.style.border="2px solid black"
})
boton2.addEventListener("click", function(){
    contenedor1.style.background="red"
    contenedor1.style.width="50%"
    contenedor1.style.height="50vh"
    contenedor1.style.border="2px solid black"
})
boton2.addEventListener("click", function(){
    contenedor2.style.background="red"
    contenedor2.style.width="50%"
    contenedor2.style.height="50vh"
    contenedor2.style.border="2px solid black"
})