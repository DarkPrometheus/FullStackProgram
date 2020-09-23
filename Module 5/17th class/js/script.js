class Pet{
    constructor(id, age, name, type, breed, gender, service, OwnerName, ContactPhone){
        this.id = id;
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

var ID = 4;
var Scooby = new Pet(1, 50, "Scooby", "Dog", "Dane", "Male", "Full Service", "Shagy", "45454545");
var Dimitri = new Pet(2, 50, "Dimitri", "Bear", "Ursidae", "Male", "Full Service", "Vladimir Putin", "46454545");
var Aleksander = new Pet(3, 50, "Aleksander", "Dog", "Siberian Husky", "Male", "Full Service", "Alexey", "47454545");

var txtName = document.getElementById('Name'),
    txtAge = document.getElementById('Age'),
    txtType = document.getElementById('Type'),
    txtBreed = document.getElementById('Breed'),
    txtGender = document.getElementById('Gender'),
    txtService = document.getElementById('Services'),
    txtOwner = document.getElementById('Owner'),
    txtPhone = document.getElementById('Phone');

function Register(){
    var thePet = new Pet(ID, txtName.value, txtAge.value,txtType.value, txtBreed.value, txtGender.value, txtService.value, txtOwner.value, txtPhone.value);
        ID += 1;

    Clear();
    display(thePet);
}

function display(pet){
    let Tabla = document.getElementById("pets");
    let row = 
       `<tr id = ${pet.id}>
            <td>${pet.id}</td>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.type}</td>
            <td>${pet.breed}</td>
            <td>${pet.gender}</td>
            <td>${pet.service}</td>
            <td>${pet.OwnerName}</td>
            <td>${pet.ContactPhone}</td>
            <td><input type="button" class="btn_delete" value="Delete" onclick="Delete(${pet.id});"></td>
        </tr>`;

    Tabla.innerHTML += row;
}

function Delete(id){
    item = document.getElementById(id);
    parent = item.parentNode;
    parent.removeChild(item);
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

display(Scooby);
display(Dimitri);
display(Aleksander);

// Desplegar el numero de animales registrados y el tipo
// Buscar mascota