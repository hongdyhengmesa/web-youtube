<template>
    <h2>------- {Book System} ---------</h2>
    <h5>Title of book: {{ book.title }}</h5>
    <h5>Auth name: {{ book.author }}</h5>
    <h5>Price of Book: {{ book.price }}</h5>
</template>

<script setup>
    defineProps({
        book : Object
    })
</script>