<template>
    <div v-for="employee in employees" :key="employee.id">
        <p>{{ employee.name }}</p>
        <p>{{ employee.position }}</p>
    </div>
</template>

<script setup>
    const employees = [
        {
            id: 1,
            name: "Neymar",
            position: "Developer"
        },
        {
            id: 2,
            name: "Ronaldo",
            position: "Designer"
        },
        {
            id: 3,
            name: "Messi",
            position: "Full stack"
        }
    ]
</script>