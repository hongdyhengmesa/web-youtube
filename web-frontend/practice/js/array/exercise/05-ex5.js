const cart = [
    {
        item: "Laptop",
        price: 800,
        quantity: 2,
    },
    {
        item : "Phone",
        price : 1300,
        quantity : 3
    }
]

const total = cart.reduce((cal, items) =>{
    return cal + (items.price * items.quantity);
}, 0)
console.log(total)