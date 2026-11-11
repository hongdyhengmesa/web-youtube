<template>
    <h2>---------- {Food Card} -----------</h2>
    <h4>Food name: {{ food.name }}</h4>
    <h4>Price of Food: {{ food.price }}$</h4>
    <h4>Category : {{ food.category }}</h4>
</template>

<script setup>
    defineProps({
        food : Object
    })
</script>