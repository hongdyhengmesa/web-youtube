<template>
    <input type="number" v-model="price" placeholder="Enter Price...">
    <input type="number" v-model="quantity" placeholder="Enter Quantity...">
    <h4>{{ total }}</h4>
    
</template>

<script setup>
    import { ref, computed} from 'vue'
    const price = ref("")
    const quantity = ref("")
    const total = computed(() => {
        return price.value * quantity.value
    })
</script>