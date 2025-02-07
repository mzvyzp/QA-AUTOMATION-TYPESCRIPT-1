const obj1 = {
    name: "Coon",
    animal: "cat",
    props: {
        breed: "mainecoon",
        age: 12,
        food: "RoyalCanin"
    },
    colorOfFur: ["sfs", 22, "(brown on silver)"],
    animalInfo: function() {
        console.log("Name:", this.name, "breed: ", this.props.breed);
        console.log("Color of fur (int. standard)", this.colorOfFur);
    }

};

obj1.animalInfo();
