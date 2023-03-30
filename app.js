class Person {
	constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.friend = obj.friend;
    }

    sayHelloToFriend() {
      document.getElementById("voice").innerHTML = `Hi, ${this.friend}`;
    }
}

const Mike = new Person({
  name: "Mike",
  age: 20,
  friend: "Mayu"
});

Mike.sayHelloToFriend();