<template>
    <button class="btn" @click="hello">Click Me</button>
</template>

<script setup>
    function hello(){
        alert("Welcome to Event Handling!!");
    }
</script>

<style scoped>
    .btn{
        padding: 10px;
        background-color: rgb(53, 53, 139);
        border: none;
        color: white;
        border-radius: 10px;
        transition: ease-in-out 0.4s;
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .btn:hover{
        background-color: red;
    }

</style>