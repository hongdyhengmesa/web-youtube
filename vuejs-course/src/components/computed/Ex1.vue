<template>
    <input type="text" v-model="firstName" placeholder="Enter FirstName">
    <input type="text" v-model="lastName" placeholder="Enter LastName">
    <h2>{{ fullName }}</h2>
</template>

<script setup>
    import {ref, computed} from 'vue'

    const firstName = ref("Hong")
    const lastName = ref("Dyhengmesa")
    const fullName = computed(() =>{
        return `${firstName.value} ${lastName.value}`
    })

</script>