<!-- Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com -->

<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(product, index) in products" :key="index">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
})
const { data: products } = await useFetch('https://fakestoreapi.com/products');
useHead({
  title: 'Nuxt | Merch',
  meta: [
    {name: 'description' , content: 'Nuxt 3 Merch'}
  ]
})
</script>

<style lang="scss" scoped></style>