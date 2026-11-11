<template>
    <div class="login-form">
        <input type="text" v-model="username" placeholder="Enter Username...">
        <input type="password" v-model="password" placeholder="Enter Password...">
        <button @click="login">Login</button> 
        <br>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const username = ref("")
    const password = ref("")
    
    function login(){
        console.log(username.value)
        console.log(password.value)
    }
</script>

<style scoped>
    .login-form{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        width: 450px;
        height: 400px;
        background-color: rgb(223, 116, 182);
    }

    input{
        width: 150px;
        padding: 10px;
        margin-right: 15px;
        border: none;
        border-radius: 15px;
    }

    button{
        padding: 10px;
        border-radius: 15px;
        border: none;
        background-color: blue;
        color: white;
        font-weight: 700;
        cursor: pointer;
    }

</style>