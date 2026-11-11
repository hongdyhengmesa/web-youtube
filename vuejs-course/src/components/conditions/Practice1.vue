<template>
    <h1 v-if="isStu">Welcome student to the Class!!</h1>
    <p v-else>The condition is  <span>Flase</span> , please try again</p>
</template>

<script setup>
   // for this we can used for 0/1 or false/ true
   const isStu = 1
</script>

<style scoped>

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1{
       font-size: 30px;
       font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
       color: blue;
       transition: ease-in-out 0.4s;
       cursor: pointer;
    }

    h1:hover{
        color: rgb(18, 155, 66);
    }

    p{
       font-size: 30px;
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
       font-weight: 800;
       color: rgb(18, 41, 214);
    }

    span{
        color: red;
    }

</style>