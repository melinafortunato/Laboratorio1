const prompt=require("prompt-sync")({sigint:true});

let numero= parseInt(prompt ("ingrese de que numero desea la tabla: "))
let tabla = prompt("Opciones: 1- Tabla de multiplicar 2- Tabla de sumar 3- Ttabla de restar 4- Tabla de dividir, Elija una opcion: ");



const suma=(numero) => {
    for(let i=0; i<=10; i++){
        let operacion= `${i} + ${numero} = ${i + numero}`
       console.log(operacion)  
    }  
}

const resta=(numero) => {
    for(let i=0; i<=10; i++){
        let operacion=`${i+numero} - ${numero}  = ${(i+numero) - numero }`
       console.log(operacion)
    }  
}

const multiplicar=(numero) => {
    for(let i=0; i<=10; i++){
        let operacion=`${i} * ${numero} = ${i * numero}`
       console.log(operacion) 
    }  
}

const dividir=(numero) => {
    for(let i=0; i<=10; i++){
        let operacion=`${numero*i} / ${numero} = ${i}`
        console.log( operacion) 
    }
}


if(!(Number(numero))){
    console.log("Ingrese solo numeros en la eleccion del numero de tabla.")}

else if(tabla==1){
    suma(numero);
}
else if(tabla==2){
    resta(numero);
}
else if(tabla==3){
    multiplicar(numero);
}
else if(tabla==4){
    dividir(numero);
}
else{console.log("ingrese una opcion valida")}

