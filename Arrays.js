/*Diff between Array and Object ...Objetcs are key value pairs
Arrays list of values without key value pairs.*/


let values = [];// or new Array();
console.log(values);
values.push(5);
values.push(3);

for(let i =0;i<values.length;i++)
  console.log(values[i]);


let values1 = [1,2,3,4];
console.log(values1);
console.log(values1.length);

console.log(values[1]);
  //We did not get ArrayIndexOutOfBound , instead we get undefined.

let names = ['Supi','PJ','John'];
names[3] =  'Sam';//Adding data to araay
console.log(names); 