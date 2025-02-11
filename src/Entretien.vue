<template>
    <div>
      <h1>Entretien</h1>
      
      <label for="dateFinCont">Quelle est la date de fin de validité de votre contrôle technique ?</label>
      <input 
        type="text" 
        id="dateFinCont" 
        placeholder="Votre réponse" 
        v-model="dateFinCont"
      >
      
      <button @click="saveData">Valider</button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from "vue";
  import { store } from "@/store";
  
  const dateFinCont = ref("");
  const plateNumber = computed(() => store.plateNumber);
  const storageKey = "DateFinControletech";
  
  const loadDataFromLocalStorage = () => {
    if (!plateNumber.value) return;
  
    const storedData = JSON.parse(localStorage.removeItem(plateNumber.value)) || {};
    dateFinCont.value = storedData[storageKey] || "";
  };
  
  const saveData = () => {
    if (!plateNumber.value) return;
    
    const entretien = { [storageKey]: dateFinCont.value }; // Réécriture complète de l'objet
    localStorage.setItem(plateNumber.value, JSON.stringify(entretien));
    console.log("Données enregistrées:", localStorage.getItem(plateNumber.value));
    alert("Données enregistrées avec succès !");
  };
  
  onMounted(() => {
    loadDataFromLocalStorage();
  });
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
  