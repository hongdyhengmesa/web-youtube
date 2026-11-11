<template>
    <button @click="sendUser">Send Name</button>
</template>

<script setup>
    const emit = defineEmits(["send-name"])
    function sendUser(){
        emit("send-name", "Mesa")
    }
</script>