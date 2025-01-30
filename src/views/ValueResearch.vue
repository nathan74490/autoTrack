<template>
    <div>
      <p>Numéro de plaque: {{ store.plateNumber }}</p>
      <p>Label: {{ store.AWN_label }}</p>
  
      <!-- Génération dynamique des sections -->
      <div v-for="(item, index) in infoCar" :key="index" class="info-section">
        <h2>{{ item.id }}</h2>
        <ul>
          <li v-for="(value, key) in item" :key="key" v-if="key !== 'id'">
            <strong>{{ key }}:</strong> {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue'
  import { store } from '@/store'
  
  onMounted(() => {
    store.loadJSONData() // Charge les données JSON depuis le store
  })
  
  // Générer dynamiquement infoCar avec computed pour la réactivité
  const infoCar = computed(() => [
    { id: 'Identification', VIN: store.AWN_VIN, CodeMoteur: store.AWN_code_moteur, couleur: store.AWN_couleur, porte: store.AWN_nbr_de_places },
    { id: 'Carburant', Type: store.AWN_energie, conso: `${store.AWN_consommation_mixte} l/100` },
    { id: 'Motorisation', Cylindrée: store.AWN_nbr_cylindre_energie, puissance: store.AWN_puissance_chevaux, "puissance Fisc": store.AWN_puissance_fiscale, nbCylindre: store.AWN_nbr_cylindres },
    { id: 'Transmission', traction: store.AWN_propulsion }
  ])
  </script>
  
  <style>
  /* Un peu de style pour organiser les sections */
  .info-section {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #B1B1B1;
  }
  </style>
  