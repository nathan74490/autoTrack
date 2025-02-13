<script setup>
import { computed } from "vue";
import { store } from "@/store";

defineProps({
  dateFinCont: String,
});

const plateNumber = computed(() => store.plateNumber);

const saveData = () => {
  if (!plateNumber.value) {
    console.warn("PlateNumber non défini, impossible d'enregistrer les données.");
    return;
  }

  // Récupérer les données existantes
  const storedData = JSON.parse(localStorage.getItem(plateNumber.value)) || {};
  storedData.Datefincontroletech = dateFinCont;

  // Sauvegarder dans le localStorage
  localStorage.setItem(plateNumber.value, JSON.stringify(storedData));

  console.log("Données enregistrées :", storedData);
};
</script>
