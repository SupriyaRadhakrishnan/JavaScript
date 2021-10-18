function Alien(fname,tech)
{

    this.fname = fname;
    this.tech = tech;

    this.work = function()
    {
        console.log("Solving Bugs");
    }

}

let alien1 = new Alien("Supi","Java");
let alien2 = new Alien("PJ","Mainframe");
console.log(alien1.fname);
console.log(alien2);
alien1.work();