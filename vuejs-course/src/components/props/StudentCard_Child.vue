<template>
    <h4>Student name: {{ name }}</h4>
    <h4>Student sex: {{ sex }}</h4>
    <h4>Student score: {{ score }}</h4>
    <h4>Student grade: {{ grade }}</h4>
    <h4>Student major: {{ major }}</h4>
</template>

<script setup>
    defineProps({
        name: String,
        sex : String,
        score : Number,
        grade : String,
        major : String
    })
</script>