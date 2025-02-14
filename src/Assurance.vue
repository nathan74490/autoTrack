<template>
    <div>
        <label for="yesOrNo">Assuré:</label>
        <select name="yesOrNo" id="yesOrNo" v-model="assure">
            <option value="Non">Non</option>
            <option value="oui">Oui</option>
        </select>
        <button @click="saveDataAssure">Valider</button>
    </div>
    <div>
        <label for="DateFinAssurance"> quel est la date de fin de votre protection par l'assurance</label>
        <input type="date" id="DateFinAssurance" value="2018-07-22" min="2025-01-01" max="2026-12-31" v-model="finAssu">
        <button @click="saveDatafinAssu">Valider</button>
    </div>


</template>
<script setup>
import { ref, computed } from "vue";
import { store } from "@/store";

const assure = ref("");
const finAssu = ref("");
const plateNumber = computed(() => store.plateNumber);

const saveDatafinAssu = () => {
    if (!plateNumber.value) {
        console.warn("PlateNumber non défini, impossible d'enregistrer les données.");
        return;
    }
    const storedData = JSON.parse(localStorage.getItem(plateNumber.value));
    localStorage.removeItem(plateNumber.value);
    storedData.DatefinAssu = finAssu.value
    localStorage.setItem(store.plateNumber, JSON.stringify(storedData))
};
const saveDataAssure = () => {
    if (!plateNumber.value) {
        console.warn("PlateNumber non défini, impossible d'enregistrer les données.");
        return;
    }
    const storedData = JSON.parse(localStorage.getItem(plateNumber.value));
    localStorage.removeItem(plateNumber.value);
    storedData.Assure = assure.value
    localStorage.setItem(store.plateNumber, JSON.stringify(storedData))
};
</script>
<style></style>