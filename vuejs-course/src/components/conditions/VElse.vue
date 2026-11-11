<template>
    <p v-if="num >= 18">Adults</p>
    <p v-else>Younger</p>
</template>

<script setup>
   const num = 15
</script>