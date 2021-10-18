let alien = {
    firstName: "Supi",
    Tech: "JavaScript",
    laptop : {
        cpu: "i7",
        brand:"Asus",
        ram : 4,
    }

}

console.log(alien);
console.log(alien.laptop);
console.log(alien.laptop.brand);

console.log(alien.laptop.brand?.length);// ? gives us undefined instead of getting error. we can gib=ve ? for alien and laptop as well
delete alien.laptop;
console.log(alien);