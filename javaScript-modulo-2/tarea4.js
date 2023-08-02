const prompt=require("prompt-sync")({sigint:true});

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
addDataPersona("Ramiro", "Cartenau" ,15, "Salta", 1, true);
 
console.table(DataPersona)