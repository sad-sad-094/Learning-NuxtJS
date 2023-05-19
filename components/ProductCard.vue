<!-- Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com -->

<template>
  <div class="card text-center">
    <img :src="product.image" :alt="product.title" class="thumb">
    <p class="font-bond text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">See Details</p>
    </NuxtLink>

  </div>
</template>

<script setup>
const { product } = defineProps(['product']);
</script>

<style lang="scss" scoped>
.thumb {
  max-height: 120px;
  max-width: 70px;
  margin: 0 auto;
}
</style>