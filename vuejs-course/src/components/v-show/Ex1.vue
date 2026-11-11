<template>
    <h1 v-show="isVisible">Hello Vue</h1>
    <h2 v-show="online">Online</h2>
</template>
<script setup>
    const isVisible = true
    const online = true
</script>