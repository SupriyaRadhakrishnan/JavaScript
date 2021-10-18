//traditional
let greet= function() {
    console.log("Hello World");
    return 1;
}

console.log(greet());

//ShortCut
let greet1= () => {
    console.log("Hello World1");
    return 2;
}

console.log(greet1());

//with parameters
//ShortCut
let greet2= (user) => {
    console.log("Hello " + user);
    return 3;
}

let user = "Supi";
console.log(greet2(user));

//SingleLine function
let add = (num1,num2) => num1+num2;//does not require a return keyword as well

console.log(add(5,6));

let addNeg = (num1,num2) => {
    if(num1 < 0 && num2 <0)
      return 0;
    else if(num1 < 0 && num2 >0)
     return num2;
    else if(num1 > 0 && num2 < 0)
     return num1;
    else
    num1+num2;//does not require a return keyword as well
}
console.log(addNeg(-5,6));