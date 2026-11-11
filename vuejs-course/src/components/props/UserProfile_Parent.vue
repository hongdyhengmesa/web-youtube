<template>
    <!-- Send data to the child -->
    <UserProfile_Child
        :name="user.name"
        :age="user.age"
        :job="user.job"
    />
</template>

<script setup>
    import UserProfile_Child from  "./UserProfile_Child.vue";
    const user = {
        name : "John",
        age : 23,
        job : "Frontend Developer"
    }
</script>