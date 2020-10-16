function display(){

    // create the vars
    var pets = salon.pets;
    var text = "";
    var petsSection = document.getElementById("petSection");
    const DogIcon = '<i class="fas fa-dog"></i>';
    const CatIcon = '<i class="fas fa-cat"></i>';
    const BirdIcon = '<i class="fas fa-crow"></i>';

    // travel the pets array
    for (let i = 0; i < pets.length; i++) {
        // create the html text
        text += `<div class = "pet">
                 <h2> Name: ${pets[i].name}</h2>
                 
                 <p> Age: ${pets[i].age}</p>
                 <p> Type: ${pets[i].yype}</p>
                 <p> Breed: ${pets[i].breed}</p>
                 <p> Gender: ${pets[i].gender}</p>
                 <p> Services: ${pets[i].services}</p>
                 <p> OwnerName: ${pets[i].ownerName}</p>
                 <p> ContactPhone: ${pets[i].contactPhone}</p>
                </div>`;
                console.log(text);
    }
    // display the pets on the html

}

display();