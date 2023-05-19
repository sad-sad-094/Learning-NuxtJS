<!-- Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com -->

<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/products">Nuxt App Merch</NuxtLink>
      </nav>
    </header>
    <!-- output the page content -->
    <div>
      <slot />
    </div>

    <footer>
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
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>