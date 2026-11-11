<template>
    <h1 v-if="score >= 90">You did it for Grade A</h1>
    <h2 v-else-if="score >= 80">You did it for Grade B</h2>
    <h3 v-else-if="score >= 70">You did it for Grade C</h3>
    <h4 v-else-if="score >= 60">You did it for Grade D</h4>
    <h5 v-else-if="score >= 50">You did it for Grade E</h5>
    <h6 v-else>Try your best for Grade F</h6>
</template>

<script setup>
    const score = 30
</script>

<style scoped>
    *{
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }

    h1{
        color: green;
    }

    h2{
        color: blue;
    }

    h3{
        color: yellow;
        background-color: black;
        padding: 10px;
    }

    h4{
        color: purple;
    }

    h5{
        color: brown;
    }

    h6{
        color: red;
    }

</style>