<template>
    <h5>Your name: {{ name }}</h5>
    <h5>{{ name.toLowerCase() }}</h5>
    <h5>{{ name.toUpperCase() }}</h5>
    <h5>{{ name.length }}</h5>
</template>

<script setup>
   const name = "MengKorng";
</script>