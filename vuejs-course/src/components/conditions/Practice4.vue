<template>
    <h2>{{ product }}</h2>
    <h5 v-if="stock > 0">Available in Stock</h5>
    <p v-else>Sold out Stock</p>
</template>

<script setup>
    const product = "Macbook";
    const stock = 2;
</script>

<style scoped>
    h2{
        color: blue;
        font-size: 34px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 800;
    }

    h5{
        color: green;
        font-size: 25px;
        background-color: bisque;
        padding: 10px;
        border-radius: 20px;
    }
    
    p{
        color: red;
        background-color: rgb(18, 18, 23);
        padding: 10px;
        border-radius: 40px;
    }
</style>