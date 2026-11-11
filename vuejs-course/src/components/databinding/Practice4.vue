<template>
    <h4>{{ country }}</h4>
    <h4>{{ city }}</h4>
    <h5>{{ city  + " , " + country}}</h5>
</template>

<script setup>
   const country = "Cambodia";
   const city = "Phnom Penh"
</script>