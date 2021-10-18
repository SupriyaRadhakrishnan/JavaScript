//Object Literal
let alien = {
    firstName: "Supi",
    Tech: "JavaScript",
    'work exp' : 4// This is a type of assigning property value
};


let input = 'firstName';//Assign the Object property name to a variable.

console.log(alien.firstName);
console.log(alien['firstName']);
console.log(alien.Tech);
console.log(alien['Tech']);
console.log(alien['work exp']);//We cannot use .(dot) operator
console.log(alien[input]);