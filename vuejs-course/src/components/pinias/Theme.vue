<template>
    <div
        class="container"
        :class="theme.isDark ? 'dark' : 'light'"
    >
        <h1>Pinia Dark Mode</h1>

        <h2>
        Current Theme:
        {{ theme.isDark ? "Dark" : "Light" }}
        </h2>

        <button @click="theme.toggleTheme()">
        {{ theme.isDark ? "Switch to Light" : "Switch to Dark" }}
        </button>
    </div>
</template>

<script setup>
import { useThemeStore } from "../../stores/theme"

const theme = useThemeStore()
</script>

<style scoped>
    .container {
    min-height: 100vh;
    padding: 30px;
    transition: 0.3s;
    }

    .light {
    background: white;
    color: black;
    }

    .dark {
    background: #222;
    color: white;
    }

    button {
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 20px;
    }
</style>