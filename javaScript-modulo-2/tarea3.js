const prompt=require("prompt-sync")({sigint:true});

let numero= parseInt(prompt ("ingrese de que numero desea la tabla: "))
let tabla= prompt("Elija que operacion desea: Presione 1 si quiere la de sumar, presione 2 si quiere la de restar, presione 3 si quiere la de Multiplicar o presione 4 si quiere la de dividir:  ")


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

