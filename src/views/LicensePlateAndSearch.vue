<script setup>
import { ref } from 'vue'
import { store } from '@/store' 
import LicensePlate from '@/views/LicensePlate.vue'
import Search from '@/views/Search.vue'

const title = ref('') 


const sendToStore = () => {
  store.setPlateNumber(title.value) 
  store.ifPlateisinlocal();
  console.log('Valeur envoyée au store:', store.plateNumber)
}
</script>

<template>
  <div id="home">
    <h2>Je te conseille d'utiliser les plaques : DK173ZL ou EG005RP</h2>
    <LicensePlate v-model:title="title" />
    <nav id="search">
      <Search @click="sendToStore" />
    </nav>
  </div>
</template>

<style>
h2{
  font-size:medium;
  color: white;
}
#search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#home {
  padding-top: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
}
</style>
