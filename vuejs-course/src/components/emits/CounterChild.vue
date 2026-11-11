<template>
    <button @click="emit('increase')">+</button>
</template>

<script setup>
    const emit = defineEmits(["increase"])
</script>