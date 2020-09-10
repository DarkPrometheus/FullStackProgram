// Objeto para el salon de mascotas, name, address, hours

// Arreglo con mascotas, name, breed, gender, type, services

// Funcion desplegar nombres

// Funcion desplegar cantidad de mascotas registradas

let PetSalon = {
    Name: "The Russian pet salon",
    Address:{
        street: "Av. University",
        Numero: "245-K 25896"
    },
    Hours:{
        Open:"8:00",
        Close:"17:00"
    },
    Pets:[
        {
            name:"Scooby",
            age:50,
            type:"Dog",
            breed:"Dane",
            gender:"Male"
        },
        {
            name:"Scrapy",
            age:40,
            type:"Dog",
            breed:"Dane",
            gender:"Male"
        },
        {
            name:"Tweety bird",
            age:50,
            type:"Bird",
            breed:"Canarian",
            gender:"Male"
        },
    ]
}

function DisplayNames(){
    for (let index = 0; index < PetSalon.Pets.length; index++) {
        const element = PetSalon.Pets[index].name;
        console.log(PetSalon.Pets[index].name);
    }
}

function DisplayNumberOfPets(){
    console.log(PetsName.length);
}

DisplayNames();