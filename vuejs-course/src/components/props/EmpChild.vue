<template>
    <p>Employee name: {{ employee.name }}</p>
    <p>Employee age : {{ employee.salary }}</p>
    <p>Salary for Employee: {{ employee.department }}</p>
</template>

<script setup>
    defineProps({
        employee : Object
    })
</script>