<template>
    <input type="text" v-model="search" placeholder="Search...">
    <ul>
        <li v-for="product in filterProducts" :key="product">
            {{ product }}
        </li>
    </ul>
</template>

<script setup>
    import { ref, computed } from 'vue'

    const search = ref('')

    const products = ref([
        "Apple",
        "Banana",
        "Mango",
        "Grape"
    ])

    const filterProducts = computed(() =>{
        return products.value.filter(product => 
        product.toLowerCase().includes(search.value.toLowerCase())
    )
    })

</script>