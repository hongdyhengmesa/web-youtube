<template>
    <div class="container">
        <h2>Child Component</h2>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <p>Job: {{ job }}</p>
    </div>
</template>

<script setup>
    defineProps({
        name: String,
        age : Number,
        job : String
    })
</script>