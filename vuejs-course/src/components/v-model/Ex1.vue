<template>

    <label for="">Username:</label>
    <input v-model="username">
    <h2>{{ username }}</h2>

    <label for="">Age:</label>
    <input v-model="age">
    <h2>{{ age }}</h2>

    <label for="">Input messages:</label>
    <textarea v-model="message"></textarea>
    <p>{{ message }}</p>

    <input type="checkbox" v-model="agree">
    <p>{{ agree }}</p>

    <select v-model="country">
        <option>Cambodia</option>
        <option>Japan</option>
        <option>China</option>
    </select>
    <h2>{{ country }}</h2>

</template>
<script setup>

    import { ref } from 'vue'

    const username = ref("")

    const age = ref("")

    const message = ref("")

    const agree = ref(true)

    const country = ref("")

</script>

<style scoped>
    label{
        font-size: 18px;
        margin-right: 10px;
        font-weight: 600;
    }

    input{
        border-radius: 10px;
        width: 300px;
        padding: 15px;
        border: 1px solid black;
        color: gray;
    }

    h2{
        color: rgb(199, 44, 44);
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        text-decoration: underline;
    }

</style>