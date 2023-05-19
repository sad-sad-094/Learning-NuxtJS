<!-- Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com -->

<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae sapiente blanditiis adipisci amet perspiciatis suscipit quia commodi nesciunt molestias nostrum accusamus deserunt tempore reiciendis nam soluta nihil, iure eos!</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style lang="scss" scoped></style>