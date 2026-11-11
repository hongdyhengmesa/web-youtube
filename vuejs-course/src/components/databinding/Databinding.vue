<template>
    <!-- Complex logic -->
    <h1>Total: {{ multi() }}</h1>
    <h1>Total: {{ sum() }}</h1>
    <h1>Total: {{ minus() }}</h1>
    <h1>Total: {{ divide() }}</h1>
    <h1>Total: {{ remain() }}</h1>
</template>

<script setup>

    function multi(){
        return 900 * 4;
    }

    function sum(){
        return 100 + 30;
    }

    function minus(){
        return 190 - 10;
    }

    function divide(){
        return 890 / 2;
    }

    function remain(){
        return 81 % 2;
    }

</script>