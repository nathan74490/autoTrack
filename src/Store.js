import { reactive } from 'vue'
import axios from 'axios';
export const store = reactive({
  plateNumber: '', // Valeur de la plaque

  setPlateNumber(value) {
    store.plateNumber = value
    localStorage.setItem('plateNumber', value) // Sauvegarde la plaque
  },

  ifPlateisinlocal() {
    if (localStorage.getItem(store.plateNumber)) {
      const data = JSON.parse(localStorage.getItem(store.plateNumber))
      Object.assign(store, data);
      console.log(data)
    } else {
      const car = { "Datefincontroletech": "Non renseigné", "Accidents": "Non renseigné", "Assure": "Non renseigné", "DatefinAssu": "Non renseigné" }
      localStorage.setItem(store.plateNumber, JSON.stringify(car))
    }
  },

  async loadCarData() {
    const options = {
      method: 'GET',
      url: `https://api-siv-systeme-d-immatriculation-des-vehicules.p.rapidapi.com/${store.plateNumber}`,
      headers: {
        'x-rapidapi-key': '73334b27f4mshfbc422e507abc22p1c35e7jsncf2163ad2f7f',
        'x-rapidapi-host': 'api-siv-systeme-d-immatriculation-des-vehicules.p.rapidapi.com'
      }

    };

    try {

      const response = await axios.request(options);
      console.log(response.data);
      localStorage.setItem('infoCar', JSON.stringify(response.data.data))
      const data = JSON.parse(localStorage.getItem('infoCar'));
      if (data) Object.assign(store, data);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  }
})


