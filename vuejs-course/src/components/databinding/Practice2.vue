<template>
    <p>Value is: {{ num1 - num2 }}</p>
    <p>Value is: {{ num1 + num2 }}</p>
    <p>Value is: {{ num1 * num2 }}</p>
    <p>Value is: {{ num1 / num2 }}</p>
    <p>Value is: {{ num1 % num2 }}</p>
</template>

<script setup>
    const num1 = 63;
    const num2 = 5;
</script>