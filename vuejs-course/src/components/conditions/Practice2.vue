<template>
   <h2 v-if="temperature >= 37">Hot</h2>
   <p v-else>Cool</p>
</template>

<script setup>
   const temperature = 30
</script>