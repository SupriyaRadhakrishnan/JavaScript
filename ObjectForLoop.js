let alien = {
    firstName: "Supi",
    Tech: "JavaScript",
    laptop : {
        cpu: "i7",
        brand:"Asus",
        ram : 4,
    }

}

for(let key in alien){
   console.log(key,alien[key]);
    if(typeof(alien[key]) === 'object')
     {
         for(let innerkey in alien[key])
           console.log(innerkey,alien[key][innerkey]);
     }
}