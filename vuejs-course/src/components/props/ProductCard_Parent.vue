<template>
    <ProductCard_Child
        :name="product.name"
        :series="product.series"
        :price="product.price"
    />
</template>

<script setup>
    import ProductCard_Child from "./ProductCard_Child.vue";
    const product = {
        name : "Macbook M5",
        series: 2025,
        price: 1500
    }
</script>