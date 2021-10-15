//Primitive =  number ,String,Boolean,Null,Undefined,Symbol
//Object

let biginitSample = 15050500505050505051n;
console.log(biginitSample);//Prints
let num= 4;
let user = "Sup";
let num1 = 2546384125;//Number larger than acceptable range , we use BigInt. We can use _ instead of , for expressing large values
let floatNum = 7.8;
console.log(num1*25);
console.log(typeof(floatNum));//Find the type of datatype
let hexValue = 0xf
console.log(hexValue);//prints 15
let expoValue = 1.5e12;
console.log(expoValue);// prints 1500000000000
let infi = 5/0;
console.log(infi);//Prints Infinity
infi = -5/0;
console.log(infi);//Prints -Infinity
console.log(Number.MAX_VALUE*10); //Prints Infinity
