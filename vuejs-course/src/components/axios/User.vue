<template>
    <h1>Users</h1>
    <div v-for="user in users" :key="user">
        {{ user.id }}
        {{ user.name }}
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    const users = ref([])

    async function getUsers(){
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        )
        users.value = response.data
    }

    onMounted(() =>{
        getUsers()
    })

</script>