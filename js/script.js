class Smoothie {
    constructor(base, fruits, toppings) {
        this.base = base;
        this.fruits = fruits;
        this.toppings = toppings;
    }

    getDescription() {
        return `Smoothie with ${this.base}, fruits: ${this.fruits.join(", ")}, toppings: ${this.toppings.join(", ")}`;
    }

    getPrice() {
        const basePrice = 4;
        const toppingPrice = this.toppings.length * 1;
        return basePrice + toppingPrice;
    }
}
