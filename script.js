//complete this code
class Animal {
	constructor(species){
		//it will denote that it is not accessible
		//not enforcable
		this._species = species; 
	}

	get species(){
		return this._species;
	}

	makeSound(){
		console.log(`The ${this._species} makes a sound`)
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
	
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
