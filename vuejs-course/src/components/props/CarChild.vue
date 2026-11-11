<template>
    <h1>---------- {Car Practice} ----------</h1>
    <h4>Brand of Car: {{ car.brand }}</h4>
    <h4>Model of Car: {{ car.model }}</h4>
    <h4>Year of  Car: {{ car.year }}</h4>
</template>

<script setup>
    defineProps({
        car: Object
    })
</script>