<template>
  <div id="info">
    <p>Numéro de plaque: {{ store.plateNumber }}</p>
    <p>Label: {{ store.AWN_label }}</p>
    <BtnSparePartsPages>
      <h3>Vous avez besoin de pièces detachée</h3>
    </BtnSparePartsPages>
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
import BtnModification from "@/views/BtnModification.vue";
import BtnSparePartsPages from "@/views/BtnSparePartsPages.vue";
import { ref, onMounted } from "vue";
import { store } from "@/store";

const infoCar = ref([]);

onMounted(async () => {
  await store.loadCarData(); // Assurer que les données sont chargées avant de les afficher
  store.ifPlateisinlocal();
  store.loadJSONData();
  setInfoCar();
  
});

const setInfoCar = () => {
  infoCar.value = [
    {
      id: "Identification",
      properties: [
        { name: "VIN", value: store.AWN_VIN },
        { name: "Code Moteur", value: store.AWN_code_moteur },
        { name: "Couleur", value: store.AWN_couleur },
        { name: "Nombre de portes", value: store.AWN_nbr_de_places },
      ],
    },
    {
      id: "Carburant",
      properties: [
        { name: "Type", value: store.AWN_energie },
        { name: "Consommation", value: store.AWN_consommation_mixte ? `${store.AWN_consommation_mixte} l/100` : "Non renseigné" },
      ],
    },
    {
      id: "Motorisation",
      properties: [
        { name: "Cylindrée", value: store.AWN_nbr_cylindre_energie },
        { name: "Puissance", value: store.AWN_puissance_chevaux },
        { name: "Puissance Fiscale", value: store.AWN_puissance_fiscale },
        { name: "Nombre de cylindres", value: store.AWN_nbr_cylindres },
      ],
    },
    {
      id: "Transmission",
      properties: [{ name: "Traction", value: store.AWN_propulsion }],
    },
    {
      id: "Entretien",
      properties: [
        { name: "Date de fin du contrôle technique", value: store.Datefincontroletech},
        { name: "Accidents mineurs", value: store.Accidents },
      ],
      link: { text: "Vous avez des renseignements ?", path: "/Entretien" },
    },
    {
      id: "Assurance",
      properties: [
        { name: "Assuré", value: store.Assure },
        { name: "Date de fin", value: store.DatefinAssu },
      ],
      link: { text: "Vous avez des renseignements ?", path: "/Assurance" },
    },
  ];
};
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