//DRY - DoNot Repeat yourself

//Declaring
function greet(){
console.log("Hello World");
}

//calling
greet();


//Returning a value
function rtgreet(user){
   return "Hello World " + user;
    }

    let user = "Supi"
let returnVaue = rtgreet(user); //Passinh a arg
console.log(returnVaue);