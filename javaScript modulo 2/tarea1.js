// ver si es par o impar


let num = 19

if (num % 2 == 0) {
    console.log("Par")
}
else {
    console.log("Impar")
}

// cual es el mayor y el menor

let num1 = 6
let num2 = 50
let num3 = 8

if (num1 > num2 & num1 > num3) {
    console.log(num1, "es el mayor")
}
else if (num2 > num1 & num2 > num3) {

    console.log(num2, "es el mayor")
}
else {
    console.log(num3, "es el mayor")
}

if (num1 < num2 & num1 < num3) {
    console.log(num1, "es el menor")
}
else if (num2 < num1 & num2 < num3) {

    console.log(num2, "es el menor")
}
else {
    console.log(num3, "es el menor")
}

// operaciones a partir de dos variables

let numero1 = 10
let nemuro2 = 5
let operacion = (numero1 / nemuro2)
let resultado;


switch (operacion) {
    case numero1 + nemuro2:
        resultado = (numero1 + nemuro2);
        break;

    case numero1 * nemuro2:
        resultado = (numero1 * nemuro2);
        break;

    case numero1 - nemuro2:
        resultado = (numero1 - nemuro2);
        break;

    case numero1 / nemuro2:
        resultado = (numero1 / nemuro2);
        break;

}
console.log("Resultado:", resultado)

