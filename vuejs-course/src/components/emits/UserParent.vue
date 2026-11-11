<template>
    <UserChild @send-name="receiveName" />
</template>

<script setup>
    import UserChild from "./UserChild.vue";
    function receiveName(name){
        alert("User name is " + name);
    }
</script>