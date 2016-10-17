var SayHello = (function () {
  function SayHello(person) {
    this.greeting = "Hello ";
    this.greeting += person.firstName + " ";
    this.greeting += person.lastName;
  }
  SayHello.prototype.greet = function () {
    return this.greeting;
  };
  return SayHello;
}());
var p = {
    firstName: "Donyell",
    lastName: "Marshall"
};
var hello = new SayHello(p);
document.write(hello.greet());