class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasTheSameOwnerOf(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const pet1 = new Pet("Garfield", "Gabriele", "Gatto", "Tigrato");
const pet2 = new Pet("Doggo", "Gabriele", "Cane", "Pastore Tedesco");
const pet3 = new Pet("Crosta", "Ron", "Topo", "Grigio");
console.log(pet1);
console.log(pet2);
console.log(pet3);
console.log(pet1.hasTheSameOwnerOf(pet2));
console.log(pet1.hasTheSameOwnerOf(pet3));

const pets = [];

document.querySelector("button").addEventListener("click", function () {
  const petName = document.getElementById("petName").value;
  document.getElementById("petName").value = "";
  const ownerName = document.getElementById("ownerName").value;
  document.getElementById("ownerName").value = "";
  const species = document.getElementById("species").value;
  document.getElementById("species").value = "";
  const breed = document.getElementById("breed").value;
  document.getElementById("breed").value = "";
  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);
  console.log(pets);
  const newLi = document.createElement("li");
  newLi.innerHTML = `<span class="fw-medium">${newPet.petName}</span> è un <span class="fw-medium">${newPet.species}</span> di razza <span class="fw-medium">${newPet.breed}</span> di proprietà di <span class="fw-medium">${newPet.ownerName}</span>`;
  document.querySelector("ul").appendChild(newLi);
});
