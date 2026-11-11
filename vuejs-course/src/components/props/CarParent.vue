<template>
    <CarChild :car="car"/>
</template>

<script setup>
    import CarChild from "./CarChild.vue";

    const car = {
        brand: "Lambogini",
        model: "Italy",
        year : 2025
    }

</script>