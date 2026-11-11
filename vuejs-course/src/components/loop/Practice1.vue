<template>
    <h3 v-for="color in colors" :key="color">{{ color }}</h3>
    <h4 v-for="(number, index) in numbers" :key="index"> index{{ index }} : {{ number }}</h4>
    <p v-for="(contry, index) in contries" :key="index"> index{{ index }} : {{ contry }}</p>
</template>

<script setup>

    const colors = [
        "Orange",
        "Red",
        "Blue",
        "Yellow"
    ]

    const numbers = [
        1,2,4,5,6,7
    ]

    const contries = [
        "Japan",
        "Cambodia",
        "Korea",
        "Vietnam"
    ]

</script>