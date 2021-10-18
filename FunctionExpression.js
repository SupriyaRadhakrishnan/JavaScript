//Anonymous function

let add = function(num1,num2){ // function with no name . we consider add as the name of the function
    return num1 +  num2 ;
}


console.log(add(3,4)); //add acts as the function name

let sum = add;

console.log(sum(3,4)); //sum acts as the function name

console.log(sum);//Prints [Function: add]