const palabras = ["australia",  "argentina", "españa", "colombia", "mexico"];
const pistas=["Aca habitan muchos canguros.","Les gusta tomar fernet.", "Son famosos por el flamenco.", "Su grano del cafe es uno de los mejores.", "Si te gusta el picante este es tu lugar."]
let cont = 6;
let letrasadivinadas = [];

const palabraelejida = document.getElementById("palabraelejida");
let carteles= document.querySelector("#carteles")
const letraBotones = document.querySelectorAll(".letra-btn");
const intentos = document.querySelector("#intentos")
intentos.classList.add("colorganar")
let imgvida = document.querySelector("#imgvida")
let fotointento = ["ahorcado1.jpg", "1.gif", "ahorcado2.jpg", "ahorcado3.jpg", "ahorcado4.jpg", "ahorcado5.jpg", "ahorcado6.jpg", "ahorcado7.jpg"]
let palabrarandom = palabras[Math.floor(Math.random() * palabras.length)];
let boton3 = document.querySelector("#boton3")
let pista= document.querySelector("#pista")

function primerpalabra() { palabraelejida.textContent = palabrarandom.split("").map(letra => (letrasadivinadas.includes(letra) ? letra : "_")).join(" "); }

letraBotones.forEach(button => {
    const letter = button.textContent;
    button.addEventListener("click", () => botonletras(letter))
});

function resetGame() {
    cont = 6;
    partidaPerdida = false;
    letrasadivinadas = [];
    palabrarandom = palabras[Math.floor(Math.random() * palabras.length)];
    primerpalabra();
    intentos.textContent = 6;
    imgvida.src = fotointento[cont];
    imgvida.innerHTML = "<img src='./ahorcado1.jpg'>"; 
    carteles.innerHTML="";
    letraBotones.forEach(button => {
        button.disabled = false;
    });
    pista.innerHTML="";
}

function botonletras(letra) {
    let letraelejida = false;
    for (let i = 0; i < palabrarandom.length; i++) {
        if (palabrarandom[i] === letra.toLowerCase()) {
            letrasadivinadas[i] = letra.toLowerCase();
            letraelejida = true;
        }

        const letterButton = document.getElementById(letra);
        if (letterButton) {
            letterButton.disabled = true;
        }
    }

    if (!letraelejida & (cont>0)) {
        cont -= 1;
        intentos.innerHTML = " " + cont;
        intentos.classList.add("colorprder")
    }


    if (cont == 5) {
        imgvida.src = fotointento[cont];
        imgvida.innerHTML = "<img src='./ahorcado2.jpg'>";
    }
    if (cont == 4) {
        imgvida.src = fotointento[cont];
        imgvida.innerHTML = "<img src='./ahorcado3.jpg'>";
    }
    if (cont == 3) {
        imgvida.src = fotointento[cont];
        imgvida.innerHTML = "<img src='./ahorcado4.jpg'>";
    }
    if (cont == 2) {
        imgvida.src = fotointento[cont];
        imgvida.innerHTML = "<img src='./ahorcado5.jpg'>";
    }
    if (cont == 1) {
        imgvida.src = fotointento[cont];
        imgvida.innerHTML = "<img src='./ahorcado6.jpg'>";
    }
    if (cont == 0) {
        imgvida.src = fotointento[cont];
        imgvida.innerHTML = "<img src='./ahorcado7.jpg'>";
    }

    if (cont === 0) {
        partidaPerdida = true;
        carteles.innerHTML= "<h1>PERDISTE, INTENTALO DE NUEVO!<h1>"
        carteles.classList.add("colorprder")
        letraBotones.forEach(button => {
            button.disabled = true;
        });

        setTimeout(function() {
            resetGame();
         
        },
    5000);
    }
    if (letrasadivinadas.join("") === palabrarandom) {  
        imgvida.src = fotointento[cont];
        imgvida.innerHTML = "<img src='./1.gif'>"; 
        carteles.innerHTML= "<h1>GANASTE, FELICITACIONES!!!!<h1>"
        carteles.classList.add("colorganar")
        letraBotones.forEach(button => {
            button.disabled = true;
        });
        setTimeout(function() {
            resetGame();
         
        },
    7000);
    }
    
  
    palabraelejida.textContent = palabrarandom.split("").map(letra => (letrasadivinadas.includes(letra) ? letra : "_")).join(" ");
}
function piistas() {
    if (palabrarandom === palabras[0]) {
        pista.textContent = "Pista: " + pistas[0];
    }
    if (palabrarandom === palabras[1]) {
        pista.textContent = "Pista: " + pistas[1];
    }
    if (palabrarandom === palabras[2]) {
        pista.textContent = "Pista: " + pistas[2];
    }
    if (palabrarandom === palabras[3]) {
        pista.textContent = "Pista: " + pistas[3];
    }
    if (palabrarandom === palabras[4]) {
        pista.textContent = "Pista: " + pistas[4];
    }

}




    
        







