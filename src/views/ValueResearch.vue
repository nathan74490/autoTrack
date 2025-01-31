<template>
  <div id="info">
    <p>Numéro de plaque: {{ store.plateNumber }}</p>
    <p>Label: {{ store.AWN_label }}</p>

    <ul >
      <li v-for="info in infoCar" :key="info.id" class="info-section">
        <h2>{{ info.id }}</h2>
        <ul>
          <li v-for="prop in info.properties">
            {{ prop.name }}: {{ prop.value }}
          </li>
        </ul>
        <BtnModification v-if="info.link" :path="info.link.path">
          <h3>{{ info.link.text }}</h3>
        </BtnModification>
        <!-- <RouterLink v-if="info.link" :to="info.link.path + info.id">{{ info.link.text }}</RouterLink> -->
      </li>
    </ul>


  </div>
</template>

<script setup>
import BtnModification from "@/views/BtnModification.vue"
import { computed, onMounted, reactive } from 'vue'
import { store } from '@/store'

onMounted(() => {
  store.loadJSONData() // Charge les données JSON depuis le store
})

// Générer dynamiquement infoCar avec computed pour la réactivité
// const infoCar = reactive([
//   {
//     id: 'Identification',
//     properties: [
//       { name: "VIN", value: store.AWN_VIN }
//       { name: "VCodeMoteurIN", value: store.AWN_code_moteu }
//     ]VIN: store.AWN_VIN, CodeMoteur: store.AWN_code_moteur, couleur: store.AWN_couleur, porte: store.AWN_nbr_de_places
//   },
//   { id: 'Carburant', Type: store.AWN_energie, conso: `${store.AWN_consommation_mixte} l/100` },
//   { id: 'Motorisation', Cylindree: store.AWN_nbr_cylindre_energie, puissance: store.AWN_puissance_chevaux, "puissance Fisc": store.AWN_puissance_fiscale, nbCylindre: store.AWN_nbr_cylindres },
//   { id: 'Transmission', traction: store.AWN_propulsion },
//   { id: 'entretien', 'date de fin du controle technique': 'non renseigné', 'Accident mineurs': 'non renseigné', button: 'test' },
//   { id: 'Assurance', 'Assuré': 'non renseigné', 'Date de fin': 'non renseigné', button: 'test' }
// ])

const infoCar = reactive([
  {
    id: 'Identification',
    properties: [
      { name: "VIN", value: store.AWN_VIN },
      { name: "CodeMoteur", value: store.AWN_code_moteur },
      { name: "couleur", value: store.AWN_couleur },
      { name: "porte", value: store.AWN_nbr_de_places },
    ]
  },
  {
    id: 'Carburant',
    properties: [
      { name: "Type", value: store.AWN_energie },
      { name: "Consomation", value: `${store.AWN_consommation_mixte} l/100` }
    ]
  },
  {
    id: 'Motorisation',
    properties: [
      { name: "Cylindrée", value: store.AWN_nbr_cylindre_energie },
      { name: "puissance", value: store.AWN_puissance_chevaux },
      { name: "puissance Fisc", value: store.AWN_puissance_fiscale },
      { name: "nbCylindre", value: store.AWN_nbr_cylindres },
    ]
  },
  {
    id: 'Transmission',
    properties: [
      { name: "traction", value: store.AWN_propulsion },
    ]
  },
  {
    id: 'Entretien',
    properties: [
      { name: "date de fin du controle technique", value: 'non renseigné' },
      { name: "Accident mineurs", value: 'non renseigné' },
    ],
    link: {
      text: "Vous avez des renseignement",
      path: "/Entretien"
    }
  },
  {
    id: 'Assurance',
    properties: [
      { name: "Assuré", value: 'non renseigné' },
      { name: "Date de fin", value: 'non renseigné' },
    ],
    link: {
      text: "Vous avez des renseignement ",
      path: "/Assurance"
    }
  },
])

</script>

<style>
/* Un peu de style pour organiser les sections */
#info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info-section {
  border: 1px solid #ccc;
  padding: 10px;
  width: 90%;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #B1B1B1;
  box-shadow: -3px 7px 8px rgba(21, 104, 0, 1);
  color: black;
}

h2 {
  font-weight: bold;
  color: black;
}
</style>