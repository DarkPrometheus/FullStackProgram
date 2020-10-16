var salon = {
    saloName: "The Fashion Pet",
    address: {
        street: "Av. Universiry",
        number: '214-B'
    },
    hours: {
        open: "8 a.m.",
        close: "5 p.m."
    },
    pets: []
}

class Pet{
    constructor(age, name, type, breed, gender, service, OwnerName, ContactPhone){
        this.age = age;
        this.name = name;
        this.type = type;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.OwnerName = OwnerName;
        this.ContactPhone = ContactPhone;
    }
}

var Scooby = new Pet(50, "Scooby", "Dog", "Dane", "Male", "Full Service", "Shagy", "45454545");
var Dimitri = new Pet(50, "Dimitri", "Bear", "Ursidae", "Male", "Full Service", "Vladimir Putin", "46454545");
var Aleksander = new Pet(50, "Aleksander", "Dog", "Siberian Husky", "Male", "Full Service", "Alexey", "47454545");

salon.pets = [Scooby, Dimitri, Aleksander];

var txtName = document.getElementById('Name'),
    txtAge = document.getElementById('Age'),
    txtType = document.getElementById('Type'),
    txtBreed = document.getElementById('Breed'),
    txtGender = document.getElementById('Gender'),
    txtService = document.getElementById('Services'),
    txtOwner = document.getElementById('Owner'),
    txtPhone = document.getElementById('Phone');

function Register(){
    var thePet = new Pet(txtName.value, txtAge.value,txtType.value, txtBreed.value, 
        txtGender.value, txtService.value,
        txtOwnerName.value, txtPhone.value);

    salon.pets.push(thePet);
    clear();
    display();
}

function Clear(){
    txtAge.value = "";
    txtName.value = "";
    txtType.value = "";
    txtBreed.value = "";
    txtGender.value = "";
    txtService.value = "";
    txtOwner.value = "";
    txtPhone.value = "";
}

// Desplegar el numero de animales registrados y el tipo