<script setup>
import LicensePlateAndSearch from "@/views/LicensePlateAndSearch.vue"
</script>

<template>

  <div id="input"><LicensePlateAndSearch></LicensePlateAndSearch></div>
  
  <img id="imgCar" src="../components/icons/car.svg" alt="">
  <div id="greenBackground"></div>

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
#input{
  display: flex;
  flex-direction: column;
  justify-content: center;
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

</style>
