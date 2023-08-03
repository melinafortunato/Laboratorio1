const prompt=require("prompt-sync")({sigint:true});

// Array de perosnas:

let DataPersona= [];

const addDataPersona= (Nombre, Apellido, Edad, Direccion, status, condicion) =>{
    let persona={
        Nombre,
        Apellido,
        Edad,
        Direccion,
        status,
    }

    if (condicion){
        DataPersona.push(persona)
    }
    else{DataPersona.unshift(persona)}
}

addDataPersona("Melina", "Fortunato" ,30, "Mar del plata", 1, true);
addDataPersona("Lorena", "Perez" ,25, "Cordoba", 0, true);
addDataPersona("Proscila", "Ramirez" ,18, "CABA", 3, true);
addDataPersona("Analia", "Fernandez" ,20, "San juan", 1, true);
addDataPersona("Melina", "Cartenau" ,15, "Salta", 1, true);
addDataPersona("Julia", "Laureni" ,35, "Rosario", 1, true);
addDataPersona("Maria", "Palma" ,40, "Mar del plata", 0, true);
addDataPersona("Lorenzo", "Castelar" ,17, "La plata", 1, true);
addDataPersona("Paulino", "Mauriniez" ,19, "Mar del plata", 2, true);
addDataPersona("Caterina", "Paricie" ,28, "Mar del plata", 1, true);
 
console.table(DataPersona)

// Filtrado por letra

let Nombre2=  prompt("Nombre que desea buscar: ")
let dataPersonaFiltre= DataPersona.filter((elemento) =>{
   return elemento.Nombre.toLowerCase().includes(Nombre2.toLowerCase()) 
})
console.table(dataPersonaFiltre)
console.log("*********************************")

// Promedio de edad:

let Sumadelaedad = 0;
DataPersona.forEach((elemento) => {
        Sumadelaedad += elemento.Edad;
});

let promedio = Sumadelaedad / DataPersona.length;
console.log("Promedio de edad: ", promedio);

