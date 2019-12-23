let main = document.querySelector(".main");
let form = document.querySelector(".main_form");
let DOG = document.querySelector(".ClassProperty");
let btnAddD = document.querySelector(".btnAdd");
btnAddD.addEventListener("click", SaveDog);
class Dog {
  constructor(_name, _breed, _age, _energy) {
    this._name = _name;
    this._breed = _breed;
    this._age = _age;
    this._energy = _energy;
  }

  ShowDog() {
    console.log(
      `Name: ${this._name} \nBreed: ${this._breed} \nAge: ${this._age} \nEnergy: ${this._energy}`
    );
  }

  SetName(name) {
    if (name === this._name) {
      console.log("The same names!");
    } else {
      this._name = name;
    }
  }
  GetBreed() {
    return this._breed;
  }

  DogPlay(energy) {
    console.log(`${this._name} is plaing...`);
    this._energy -= energy;
    if (this._energy <= 0) {
      this.DogDie();
    }
  }

  DogEat(eat) {
    console.log(`${this._name} is eating...`);
    this._energy += eat;
    if (this._energy > 100) {
      this.DogDie();
    }
  }

  DogSleep() {
    console.log(`${this._name} is speeping...`);
    setTimeout(() => {
      this._energy += 50;
    }, 2000);
  }

  DogDie() {
    console.log(`${this._name} is die!`);
  }
}

function SaveDog() {
  let name = document.querySelector(".name");
  let breed = document.querySelector(".breed");
  let age = document.querySelector(".age");
  let energy = document.querySelector(".energy");

  let dog = new Dog(name.value, breed.value, age.value, energy.value);
  console.log(dog);

  localStorage.setItem(id, JSON.stringify(dog));
}
