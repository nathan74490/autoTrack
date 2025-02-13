<script setup>
import { ref, onMounted } from 'vue';

const piecesCar = ref(null);

// Fonction pour récupérer les données du localStorage
const loadData = () => {
  const storedData = localStorage.getItem('piecesCar');
  if (storedData) {
    piecesCar.value = JSON.parse(storedData);
  }
};

onMounted(loadData);
</script>

<template>
  <div class='p-6'>
    <h1 class='text-2xl font-bold mb-4'>Pièces du véhicule ({{ piecesCar?.plaque }})</h1>
    <div v-if='piecesCar' class='space-y-4'>
      <div v-for='category in piecesCar.piecesVehicule' :key='category.id' class='border p-4 rounded-lg shadow'>
        <h2 class='text-xl font-semibold mb-2 capitalize'>{{ category.id.replace('_', ' ') }}</h2>
        <div v-for='(group, index) in category.proprties' :key='index' class='ml-4'>
          <div v-for='(part, partName) in group' :key='partName' class='mb-2'>
            <p><strong>{{ partName.replace('_', ' ') }}</strong>: {{ part.description }} (Ref: {{ part.reference }})</p>
          </div>
        </div>
      </div>
    </div>
    <p v-else class='text-gray-500'>Chargement des données...</p>
  </div>
</template>

<style>
.p-6 {
  padding: 1.5rem;
}
.text-2xl {
  font-size: 1.5rem;
  font-weight: bold;
}
.text-xl {
  font-size: 1.25rem;
  font-weight: 600;
}
.border {
  border: 1px solid #ddd;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.ml-4 {
  margin-left: 1rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.space-y-4 > * + * {
  margin-top: 1rem;
}
.text-gray-500 {
  color: #6b7280;
}
</style>
