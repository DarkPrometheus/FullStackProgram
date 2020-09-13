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

var txtName = document.getElementById('Name');
var txtAge = document.getElementById('Age');
var txtType = document.getElementById('Type');
var txtBreed = document.getElementById('Breed');
var txtGender = document.getElementById('Gender');
var txtService = document.getElementById('Services');
var txtOwner = document.getElementById('Owner');
var txtPhone = document.getElementById('Phone');

function Register(){
    var n = txtName.value;
    var a = txtName.value;
    var t = txtName.value;
    var b = txtName.value;
    var g = txtName.value;
    var s = txtName.value;
    var o = txtName.value;
    var p = txtName.value;

    /*var pet = new Pet(a, n, t, b, g, s, o, p);*/
    var pet = new Pet(txtAge.value, txtName.value, txtType.value, txtBreed.value, txtGender.value, txtService.value, txtOwner.value, txtPhone.value);
    console.log(pet);
    Clear();
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