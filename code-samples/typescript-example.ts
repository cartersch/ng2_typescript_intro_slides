interface Person {
  firstName : string,
  lastName : string
}
class SayHello{
  greeting: string;
  constructor(person : Person) {
    this.greeting  = "Hello ";
    this.greeting += person.firstName + " ";
    this.greeting += person.lastName;
  }
  greet() {
    return this.greeting;
  }
}
let p = {
  firstName : "Donyell",
  lastName  : "Marshall"
};
let hello = new SayHello(p);
document.write(hello.greet());