<template>
    <CounterChild @increase="increase"/>
</template>

<script setup>
    import CounterChild from "./CounterChild.vue";
    let total = 0
    function increase(){
        total++
        alert("Counter: " + total)
    }
</script>