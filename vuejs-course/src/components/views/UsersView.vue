<template>
    <section>
        <h1>Users Page</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </section>
</template>

<script setup>
    const users = [
        {
            id: 1,
            name: "Mesa"
        },
        {
            id: 2,
            name: "Phenh"
        },
        {
            id: 3,
            name: "Thorn"
        }
    ]
</script>