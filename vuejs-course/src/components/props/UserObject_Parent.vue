<template>
    <UserObject_Child :user="user" />
</template>

<script setup>
    import UserObject_Child from "./UserObject_Child.vue";
    const user = {
        name: "Haihor kdor thom",
        age : 25,
        city : "Phnom Penh"
    }
</script>