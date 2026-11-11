<template>
    <div class="container">
        <input  class="full" v-model="fullname">
        <input  class="email" v-model="email">
    </div>
    <h4>Your name is: {{ fullname }}</h4>
    <p>Your email is: {{ email }}</p>
</template>

<script setup>
    import { ref } from 'vue'
    const fullname = ref("")
    const email = ref("")

</script>

<style scoped>

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 400px;
        background-color: rgb(166, 174, 158);
    }

    .full, .email{
        margin-right: 20px;
        padding: 10px;
        border: none;
        border-radius: 10px;
        color: gray;
        font-weight: 300;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

</style>