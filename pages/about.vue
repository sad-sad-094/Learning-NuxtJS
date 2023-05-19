<!-- Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com -->

<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt App</NuxtLink>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <h2>About</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ad soluta dolorem, ab veniam obcaecati vel
      aspernatur ratione libero modi laborum non temporibus! Provident ut tenetur vitae, alias suscipit repudiandae?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima recusandae quae illum ad quam consectetur
      perferendis maiores iusto facilis delectus ipsa facere commodi nostrum aspernatur, vero nemo magni neque inventore!
    </p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0
}</style>