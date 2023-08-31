
const prompt=require("prompt-sync")({sigint:true});

// cual es el numero mas grande que ingresa el usuario?

let num1= parseInt(prompt ("Ingrese su primer numero: "))
let num2= parseInt(prompt ("Ingrese su segundo numero: "))
let num3= parseInt(prompt ("Ingrese su tercer numero: "))

if(!(Number(num1))||!(Number(num2))||!(Number(num3))){
    console.log("Ingrese solo numeros")
}
else if(num1==num2 || num2==num3 || num1==num3){
    console.log("no se puede repetir")
}
else if (num1 > num2 & num1 > num3) {
    const opcion1= `Entre ${num1} ${num2} y  ${num3} el mayor es: ${num1}`
    console.log(opcion1)
}
else if (num2 > num1 & num2 > num3) {
    const opcion2= `Entre ${num1} ${num2} y  ${num3} el mayor es: ${num2}`
    console.log(opcion2)
}
else {
    const opcion3= `Entre ${num1} ${num2} y  ${num3} el mayor es: ${num3}`
    console.log(opcion3)
}


// Tablas de multiplicacion a partir de un valor del usuario:

let num4= prompt ("Ingrese el numero que dessea multiplicar: ");


for(let i=1; i<=10; i++){
    const multiplicacion= `${i} * ${num4} = ${num4*i}`
    console.log(multiplicacion)
}

// tabala de dividir a partir del numero que ingrese el usuario:

let num5= prompt ("Ingrese el numero que dessea Dividir: ");


for(let i=1; i<=10; i++){
    const division= `${num5*i} / ${num5} = ${i}` 
    console.log(division)
}