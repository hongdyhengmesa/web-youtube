<template>
    <BookChild :book="book"/>
</template>

<script setup>
    import BookChild from "./BookChild.vue";
    const book = {
        title : "Automic Habits",
        author : "Haihor Jame",
        price : 300,
    }
</script>