class Utente {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  isSameAge(userToCompare) {
    if (this.age === userToCompare.age) {
      console.log(
        `${this.firstName} e ${userToCompare.firstName} hanno la stessa età`
      );
    } else if (this.age > userToCompare.age) {
      console.log(
        `${this.firstName} è più anziano di ${userToCompare.firstName} `
      );
      console.log(
        `${userToCompare.firstName} è più anziano di ${this.firstName} `
      );
    } else {
      console.log(
        `${userToCompare.firstName} è più anziano di ${this.firstName} `
      );
    }
  }
}
const user1 = new Utente("Gigi", "Prestiggiacomo", "33", "Monte Congo");
const user2 = new Utente("Aldo", "Abbaglio", "52", "Sassari");

user1.isSameAge(user2);

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static isSameOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
}

const form = document.querySelector("form");
const pets = [];
form.onsubmit = function (e) {
  e.preventDefault();
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);
  console.log(pets);

  form.reset();
  updatePetList();
};
const list = document.getElementById("listPet");

function updatePetList() {
  list.innerHTML = "";

  pets.forEach((element) => {
    const newListItem = document.createElement("li");
    newListItem.textContent = `Nome: ${element.petName}, Proprietario: ${element.ownerName}, Specie: ${element.species}, Razza: ${element.breed}`;
    list.appendChild(newListItem);
  });
}
