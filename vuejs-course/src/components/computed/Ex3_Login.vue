<template>
    <input type="text" v-model="userName">
    <input type="password" v-model="password">
    <button :disabled="!canLogin">Login</button>
</template>

<script setup>
    import { ref, computed } from 'vue'
    const userName = ref('')
    const password = ref('')

    const canLogin = computed(() => {
        return userName !== '' && password !== ''
    })
</script>