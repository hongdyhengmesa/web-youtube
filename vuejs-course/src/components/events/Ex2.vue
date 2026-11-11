<template>
    <div class="btn-class">
        <button class="suc" @click="showMessage('Success')">Success</button>
        <button class="err" @click="showMessage('Error')">Error</button>
    </div>
</template>

<script setup>
    function showMessage(message){
        alert(message)
    }
</script>

<style scoped>
    .btn-class{
        margin-top: 20px;
    }

    .suc{
        margin-left: 20px;
        padding: 5px;
        width: 100px;
        border: none;
        border-radius: 15px;
        color: rgb(235, 235, 239);
        font-size: 15px;
        font-weight: 800;
        background-color: green;
    }

    .err{
        margin-left: 20px;
        padding: 5px;
        width: 100px;
        border: none;
        border-radius: 15px;
        color: rgb(231, 231, 237);
        font-size: 15px;
        font-weight: 800;
        background-color: red;
    }

</style>