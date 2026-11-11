<template>
    <button @click="toggle">{{ isLogin ? "Logout" : "Login" }}</button>
</template>

<script setup>
    import {ref} from 'vue'
    const isLogin = ref(false)

    function toggle(){
        isLogin.value = !isLogin.value
    }

</script>

<style scoped></style>