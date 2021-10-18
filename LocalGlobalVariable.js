function greet (u) //u is a local variable , cannot be used outside the function. If we use we can undefined error
{
    console.log(user);//Prints Supi
    return `Hello ${u}!!`;
}

let user = 'Supi'; //user is a global variable and can be used anywhere in this program
let str = greet(user);
console.log(str);


function add(num1,num2,num3) // function add(num1,num2,num3 =1), considers num3 as 1 incase we dont passa value of num3.else it takes in the passed value
{
    return num1+num2+num3;
}

console.log(add(5,6)); //Print NaN as we did not pass num3. we can pass only 2 number and change line 12 to function add(num1,num2,num3 =1)

console.log(add(5,6,1));//Prints 12