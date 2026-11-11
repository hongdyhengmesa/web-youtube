<template>
    <h1>------------ {User Object} -------------</h1>
    <h3>User name: {{ user.name }}</h3>
    <h3>User age : {{ user.age }}</h3>
    <h3>City of User: {{ user.city }}</h3>
</template>

<script setup>
    defineProps({
        user: Object
    })
</script>