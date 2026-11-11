<template>
    <h2>{{ count }}</h2>
    <button class="btn-in" @click="increase">+</button>
    <button class="btn-de" @click="decrease">-</button>
</template>

<script setup>
    import { ref } from 'vue'
    const count = ref(0)

    function increase(){
        count.value++
    }

    function decrease(){
        count.value--
    }

</script>

<style scoped>

    h2{
        margin-left: 15px;
        width: 100px;
        background-color: bisque;
        text-align: center;
        border-radius: 10px;
    }

    .btn-de, .btn-in{
        margin-left: 10px;
        background-color: red;
        border: none;
        border-radius: 6px;
        font-size: 16px;
        color: white;
        font-weight: 800;
        padding: 4px;
        width: 50px;
    }

</style>