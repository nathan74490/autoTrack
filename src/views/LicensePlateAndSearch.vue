<script setup>
import { ref } from 'vue'
import { store } from '@/store' // Import du store
import LicensePlate from '@/views/LicensePlate.vue'
import Search from '@/views/Search.vue'

const title = ref('') // Stocke la valeur de l'input

// Fonction pour mettre à jour le store
const sendToStore = () => {
  store.setPlateNumber(title.value) // Envoie la valeur entrée au store
  console.log('Valeur envoyée au store:', store.plateNumber) // Debug
}
</script>

<template>
  <div id="home">
    <h1>{{ title }}</h1>
    <LicensePlate v-model:title="title" />
    <nav id="search">
      <Search @click="sendToStore" />
    </nav>
  </div>
</template>

<style>
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
