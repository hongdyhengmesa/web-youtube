<template>
    <p v-if="score >= 90">Grade A</p>
    <p v-else-if="score >= 80">Grade B</p>
    <p v-else-if="score >= 70">Grade C</p>
    <p v-else>Grade F</p>
</template>

<script setup>
   const score = 40
</script>