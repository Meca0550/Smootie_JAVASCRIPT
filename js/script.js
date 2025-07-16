// Smoothie App class def
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
// Function to handle the form 
function placeOrder() {
    const base = document.getElementById('base').value;

    const fruits = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .filter(el => ['Banana', 'Strawberry', 'Mango'].includes(el.value))
        .map(el => el.value);

    const toppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .filter(el => ['Chia Seeds', 'Protein Powder'].includes(el.value))
        .map(el => el.value);

    const smoothie = new Smoothie(base, fruits, toppings);

    document.getElementById('output').innerHTML = `
        <p>${smoothie.getDescription()}</p>
        <p>Total Price: $${smoothie.getPrice()}</p>
        <img src = "img/Smoothie-1.jpg" alt="Smoothie Image" style="width: 200px; height: 200px;">
    `;
}
// Function to randomly select a base and fruits, then place the order (surprice me)
function randomSmoothie() {
    const bases = ["Milk", "Almond Milk", "Yogurt"];
    const randomBase = bases[Math.floor(Math.random() * bases.length)];
    document.getElementById('base').value = randomBase;

    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = Math.random() > 0.5;
    });

    placeOrder();
}
