<<<<<<< HEAD
//Converting num to String
let num1 = String (6);
console.log(num1);
console.log(typeof(num1));

//Converting String to Num 
let userId = Number("2435");
console.log(typeof(userId));

//Coercion - When there are two different data types around the operators
let x;
console.log(typeof(x));//Print undefinied
x = 8 ;
console.log(typeof(x));//Print Number 
x =x + "";
console.log(typeof(x));//Prints String
x = x -2
console.log(typeof(x)); //Prints Number
//Boolean - Falsy and Truthy
x = !x;
console.log(x);//Prints false
console.log(Boolean(7));//Print true
console.log(Boolean(0)) //Print false  - All numbers negative and positive are true
console.log(Boolean(null)) //Prints false 
console.log(Boolean(undefined));//Prints false

//ParseInt
let a = parseInt("123 Sunny");
=======
//Converting num to String
let num1 = String (6);
console.log(num1);
console.log(typeof(num1));

//Converting String to Num 
let userId = Number("2435");
console.log(typeof(userId));

//Coercion - When there are two different data types around the operators
let x;
console.log(typeof(x));//Print undefinied
x = 8 ;
console.log(typeof(x));//Print Number 
x =x + "";
console.log(typeof(x));//Prints String
x = x -2
console.log(typeof(x)); //Prints Number
//Boolean - Falsy and Truthy
x = !x;
console.log(x);//Prints false
console.log(Boolean(7));//Print true
console.log(Boolean(0)) //Print false  - All numbers negative and positive are true
console.log(Boolean(null)) //Prints false 
console.log(Boolean(undefined));//Prints false

//ParseInt
let a = parseInt("123 Sunny");
>>>>>>> d2123cdef939d2bea5aa3dc1bc310e1c7b4ff008
console.log(a); //Prints 123