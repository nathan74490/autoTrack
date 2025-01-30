import { reactive } from 'vue'

export const store = reactive({
  plateNumber: '', // Valeur de la plaque

  setPlateNumber(value) {
    store.plateNumber = value
    localStorage.setItem('plateNumber', value) // Sauvegarde la plaque
  },

  // Charger les données depuis un fichier JSON
  async loadJSONData() {
    try {
      const response = await fetch('/seat.json') // Assurez-vous que data.json est dans public/
      if (!response.ok) throw new Error('Erreur lors du chargement du fichier JSON')

      const data = await response.json()
      Object.assign(store, data) // Fusionne les données avec le store
    } catch (error) {
      console.error('Erreur de chargement JSON:', error)
    }
  }
})
