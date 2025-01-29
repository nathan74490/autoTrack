<script setup>
import { RouterView } from 'vue-router'
import AppHeader from "@/AppHeader.vue"
import AppFooter from "@/AppFooter.vue"
import LicensePlateAndSearch from "@/views/LicensePlateAndSearch.vue"
</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>
  <LicensePlateAndSearch></LicensePlateAndSearch>
  <img id="imgCar" src="../src/components/icons/car.svg" alt="">
  <div id="greenBackground"></div>

  <RouterView></RouterView>

  <footer>
    <AppFooter></AppFooter>
  </footer>
</template>

<style scoped>
#imgCar {
  position: absolute;
  left: 15%;
  bottom: 25%;
  z-index: -1;
  rotate: 90deg;
  height: 177px;
  width: 345px;
}

#greenBackground {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 60vw;
  right: 0;
  z-index: -2;
  background-color: rgba(36, 182, 0, 0.57);
  height: 100vh;
}

footer {
  position: fixed;
  bottom: 5px;
  width: 100vw;
}
</style>
