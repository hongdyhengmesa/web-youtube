let products =[
    {
        id: 101,
        name : "laptop",
        price : 2000
    },
    {
        id: 102,
        name : "phone",
        price : 1200
    },
    {
        id: 103,
        name : "taplet",
        price : 1250
    }
]

let findProduc = products.find(products => products.price === 1200)
console.log(findProduc)