<template>
    <h2>-------------- {Movie} --------------</h2>
    <h3>Title of movie: {{ movie.title }}</h3>
    <h3>Rating for movie: {{ movie.rating }}</h3>
    <h3>Year of movie: {{ movie.year }}</h3>
</template>

<script setup>
    defineProps({
        movie: Object
    })
</script>