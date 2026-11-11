<template>
    <MovieChild :movie="movie"/>
</template>

<script setup>
    import MovieChild from "./MovieChild.vue";
    const movie = {
        title : "Animation",
        rating : 7,
        year : 2025
    }
</script>