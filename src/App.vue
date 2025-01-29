<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from "@/AppHeader.vue"
</script>

<template>
  <header>
    <AppHeader></AppHeader>
      <nav>
        <RouterLink to="/">MyHome</RouterLink>
      </nav>
  
  </header>

  <RouterView />
</template>

<style scoped>

</style>
