<template>
    <EmpChild :employee="employee"/>
</template>

<script setup>
    import EmpChild from "./EmpChild.vue";
    const employee = {
        name : "Seav Phenh",
        salary: 1200,
        department : "IT"
    }
</script>