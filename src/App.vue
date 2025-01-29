<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from "@/AppHeader.vue"
import AppFooter from "@/AppFooter.vue"

</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>
  <nav id="search">
    <RouterLink to="/"></RouterLink>
  </nav>
  <div id="greenBackground"></div>

  <RouterView />
  <footer>
    <AppFooter></AppFooter>
  </footer>
</template>

<style scoped>
#search{
  position: relative;
}
#greenBackground {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 60vw;
  right: 0;
  z-index: -1;
  background-color: rgba(36, 182, 0, 0.57);
  height: 100vh;
}
footer {
  position: fixed;
  bottom: 5px;
  width: 100vw;
}
</style>
