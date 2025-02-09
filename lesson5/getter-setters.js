const cat = {
    name: 'Coon',
    age: 12,
    characteristics: {
        color: 'brown on silver',
        breed: 'MaineCoon',
        weight: 6.5
    },

    get description() {
        return this.name + ' — ' + this.characteristics.breed +' cat with ' + this.characteristics.color + ' color of fur. Weight is ' + this.characteristics.weight + ' kg';
    },

    set updateWeight(newWeight) {
        if (newWeight > 0) {
            this.characteristics.weight = newWeight;
            console.log(`Weight is updated: ${this.characteristics.weight} kg`);
        } else {
            console.log('wrong value!');
        }
    }
};

console.log(cat.description);
cat.updateWeight = 7.2;
console.log(cat.description);
