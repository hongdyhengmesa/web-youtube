<template>
    <FoodChild :food="food"/>
</template>

<script setup>
    import FoodChild from "./FoodChild.vue";
    const food = {
        name : "Pizza",
        price : 10,
        category : "Food"
    }
</script>