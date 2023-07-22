// cuadro de dialgo o input para que el usruario infrese un valor el prompt
const prompt=require("prompt-sync")({sigint:true});

// cual es el numero mas grande que ingresa el usuario?

let num1= prompt ("ingrese su primer numero: ")
let num2= prompt ("ingrese su segundo numero: ")
let num3= prompt ("ingrese su tercer numero: ")

if (num1 > num2 & num1 > num3) {
    console.log(num1, "es el mayor")
}
else if (num2 > num1 & num2 > num3) {

    console.log(num2, "es el mayor")
}
else {
    console.log(num3, "es el mayor")
}


// Tablas de multiplicacion a partir de un valor del usuario:

let num4= prompt ("Ingrese el numero que dessea multiplicar: ");


for(let i=1; i<=10; i++){
    console.log(i,"*", num4, "= ",(num4*i))
}

// tabala de dividir a partir del numero que ingrese el usuario:

let num5= prompt ("Ingrese el numero que dessea Dividir: ");


for(let i=1; i<=10; i++){
    console.log((num5*i),"/", num5, " =", (num5*i/num5))
}