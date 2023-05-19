<!-- Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com -->

<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const url = 'https://fakestoreapi.com/products/' + id;
const { data: product } = await useFetch(url, { key: id });
definePageMeta({
  layout: 'products'
})
</script>

<style lang="scss" scoped></style>