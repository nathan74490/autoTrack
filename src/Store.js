// src/store.js
import { reactive } from 'vue'

export const store = reactive({
  plateNumber: '', // Valeur de la plaque

  setPlateNumber(value) {
    store.plateNumber = value // Met à jour la valeur
  }
})
