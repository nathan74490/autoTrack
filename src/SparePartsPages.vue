<script setup>
import { ref, onMounted } from 'vue';

const piecesCar = ref(null);
const openCategories = ref({});

// Fonction pour récupérer les données du localStorage
const loadData = () => {
  const storedData = localStorage.getItem('piecesCar');
  if (storedData) {
    piecesCar.value = JSON.parse(storedData);
    // Initialiser l'état des catégories pour qu'elles soient fermées au premier chargement
    piecesCar.value.piecesVehicule.forEach(category => {
      openCategories.value[category.id] = false;
    });
  }
};

// Fonction pour basculer l'affichage des catégories
const toggleCategory = (id) => {
  openCategories.value[id] = !openCategories.value[id];
};

onMounted(loadData);
</script>

<template>
  <div id="info">
    <h1 class='text-2xl font-bold mb-4'>Pièces du véhicule ({{ piecesCar?.plaque }})</h1>
    <div v-if='piecesCar' class='space-y-4'>
      <div v-for='category in piecesCar.piecesVehicule' :key='category.id' 
           class='info-section fixed-width' 
           :class="{'expanded': openCategories[category.id], 'collapsed': !openCategories[category.id]}">
        <h2 class='cursor-pointer' @click='toggleCategory(category.id)'>
          {{ category.nom || category.id.replace('_', ' ') }}
        </h2>
        <div v-if='openCategories[category.id]' class='ml-4 mt-2 content'>
          <div v-for='(group, index) in category.proprties' :key='index'>
            <div v-for='(part, partName) in group' :key='partName' class='mb-2'>
              <template v-if='typeof part === "object" && part.reference'>
                <p><strong>{{ partName.replace('_', ' ') }}</strong>: {{ part.description }} (Ref: {{ part.reference }})</p>
              </template>
              <template v-else-if='typeof part === "object"'>
                <p><strong>{{ partName.replace('_', ' ') }}</strong>:</p>
                <ul class='ml-4 list-disc'>
                  <li v-for='(subPart, subPartName) in part' :key='subPartName'>
                    <strong>{{ subPartName.replace('_', ' ') }}</strong>: {{ subPart.description }} (Ref: {{ subPart.reference }})
                  </li>
                </ul>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-else class='text-gray-500'>Chargement des données...</p>
  </div>
</template>

<style>
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
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-section.collapsed {
  height: 40px;
}

.info-section.expanded {
  height: auto;
}

.fixed-width {
  width: 90%;
  max-width: 600px;
}

h2 {
  font-weight: bold;
  color: black;
}

.ml-4 {
  margin-left: 1rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.text-gray-500 {
  color: #6b7280;
}
.list-disc {
  list-style-type: disc;
}
</style>
