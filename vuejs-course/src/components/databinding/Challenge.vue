<template>
    <h3>Challenge of code My Profile</h3>
    <p>------------------------------------</p>
    <h4>Your name is: {{ name }}</h4>
    <h4>Your age is : {{ age }}</h4>
    <h4>Your country is: {{ country }}</h4>
    <h4>Welcome {{ name }} !!</h4>
</template>

<script setup>
   const name = "Ronaldo";
   const age = 41;
   const country = "Portugal";
</script>