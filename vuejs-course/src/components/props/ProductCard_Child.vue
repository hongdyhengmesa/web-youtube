<template>
    <h2>Name product: {{ name }}</h2>
    <p>Series product: {{ series }}</p>
    <h5>Price of product: {{ price }}</h5>
</template>

<script setup>
    defineProps({
        name: String,
        series: Number,
        price : Number
    })
</script>