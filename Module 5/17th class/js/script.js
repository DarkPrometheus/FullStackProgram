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

let Pets = [];
Pets.push(Scooby);
Pets.push(Dimitri);
Pets.push(Aleksander);

let PetsType = [["Dog", 2], ["Bear", 1]];

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

        let Found = false;
        for (let i = 0; i < PetsType.length; i++) {
            const element = PetsType[i][0];
            console.log(element + " - " + thePet.type);
            if (element === thePet.type) {
                PetsType[i][1] += 1;
                console.log("Encontrado - " + PetsType[i][1]);
                Found = true;
                break;
            }
            console.log("Vuelta: " + i)
        }
        if(Found === false){
            PetsType.push([thePet.type, 1]);
            console.log("Añadido = " + thePet.type);
        }

        console.log("Fin ciclo");

    Clear();
    display(thePet);

    console.log("Antes de eliminar");
    let index = 1;
    NumberOfPetRows.forEach(element => {
        console.log("Vuelta " + index);
        console.log(NumberOfPetRows.length);
        Delete("Row_" + index);
        index += 1;
    });
    console.log("Despues de eliminar");

    displayNumberOfPets();
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

let NumberOfPetRows = [];
function displayNumberOfPets(){
    NumberOfPetRows = [];
    let index = 1;
    PetsType.forEach(item => {
        let Tabla = document.getElementById("petsTable");
        let row = 
       `<tr id="Row_${index}">
            <td>${item[0]}</td>
            <td>${item[1]}</td>
        </tr>`;

        Tabla.innerHTML += row;
        NumberOfPetRows.push(row);
        index += 1;
    });
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
displayNumberOfPets();

// Desplegar el numero de animales registrados y el tipo
// Buscar mascota