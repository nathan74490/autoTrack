<template>
  <div>
    <h1>Entretien</h1>
    
    <label for="dateFinCont">
      Quelle est la date de fin de validité de votre contrôle technique ?
    </label>
    
    <input 
      type="text" 
      id="dateFinCont" 
      placeholder="Votre réponse" 
      v-model="dateFinCont"
    >
    
    <button @click="saveDataControleTech">Valider</button>

    
  </div>
  <div>
 
    <label for="dateFinCont">
      Avez vous eu un accident mineurs ?
    </label>
    
    <input 
      type="text" 
      id="accidentMin" 
      placeholder="Votre réponse" 
      v-model="accidentMin"
    >
    
    <button @click="saveDataAccidentMin">Valider</button>

    
  </div>
</template>

<script setup>
import { ref, computed} from "vue";
import { store } from "@/store";

const dateFinCont = ref("");
const accidentMin = ref("");
const plateNumber = computed(() => store.plateNumber);

const saveDataControleTech = () => {
  if (!plateNumber.value) {
    console.warn("PlateNumber non défini, impossible d'enregistrer les données.");
    return;
  }
  const storedData = JSON.parse(localStorage.getItem(plateNumber.value));
  localStorage.removeItem(plateNumber.value);
  storedData.Datefincontroletech=dateFinCont.value
  localStorage.setItem(store.plateNumber,JSON.stringify(storedData))

};
const saveDataAccidentMin = () => {
  if (!plateNumber.value) {
    console.warn("PlateNumber non défini, impossible d'enregistrer les données.");
    return;
  }
  const storedData = JSON.parse(localStorage.getItem(plateNumber.value));
  localStorage.removeItem(plateNumber.value);
  storedData.Accidents=accidentMin.value
  localStorage.setItem(store.plateNumber,JSON.stringify(storedData))

};


</script>


<style scoped>
input {
  display: block;
  margin-top: 10px;
  padding: 5px;
}

button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}
</style>
