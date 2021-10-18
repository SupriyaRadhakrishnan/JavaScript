let laptop = {
    cpu: "i9",
    ram: 16,
    brand: "HP",

    getConfig: function () {
        console.log(this.cpu);//retrieves current Object value.
    },
}

laptop.getConfig();

/*why This Keyword*/
let laptop1 = {
    cpu: "i9",
    ram: 16,
    brand: "APPLE",

    getConfig: function () {
        console.log(this.cpu);//retrieves current Object value.
    },

    compare: function (other) {
        if (this.cpu > other.cpu)
            console.log(laptop1);
        else
            console.log(laptop2);
    }
}

let laptop2 = {
    cpu: "i7",
    ram: 16,
    brand: "HP",

    getConfig: function () {
        console.log(this.cpu);//retrieves current Object value.
    },
}


//Comparing 2 objects
function getFasterLaptop(laptop1, laptop2) {
    if (laptop1.cpu > laptop2.cpu)
        console.log(laptop1);
    else
        console.log(laptop2);
}

getFasterLaptop(laptop1, laptop2);

laptop1.compare(laptop2);
