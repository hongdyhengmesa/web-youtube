<template>

    <div v-for="student in students" :key="student.id">
        <h2>Name: {{ student.name }}</h2>
        <p>Age: {{ student.age }}</p>
    </div>

    <div v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <h3>{{ product.price }} $</h3>
    </div>

</template>
<script setup>
    const students = [
        {id: 1, name:"john", age:20},
        {id: 2, name:"messi", age:38},
        {id: 3, name:"ronaldo", age:40}
    ]

    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 1200
        },
        {
            id: 2,
            name: "Mouse",
            price: 20
        },
        {
            id: 3,
            name: "Keyboard",
            price: 30
        }
    ]

</script>