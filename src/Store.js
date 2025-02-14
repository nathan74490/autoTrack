import { reactive } from 'vue'
import axios from 'axios';
export const store = reactive({
  plateNumber: '', 

  setPlateNumber(value) {
    store.plateNumber = value
    localStorage.setItem('plateNumber', value) 
  },

  ifPlateisinlocal() {
    if (localStorage.getItem(store.plateNumber)) {
      const data = JSON.parse(localStorage.getItem(store.plateNumber))
      Object.assign(store, data);
    } else {
      const car = { "Datefincontroletech": "Non renseigné", "Accidents": "Non renseigné", "Assure": "Non renseigné", "DatefinAssu": "Non renseigné" }
      localStorage.setItem(store.plateNumber, JSON.stringify(car))
    }
  },
  async loadJSONData() {
    try {
      const response = await fetch('/pieceDetache.json')
      if (!response.ok) throw new Error('Erreur lors du chargement du fichier JSON')
      const data = await response.json();
      let piecesCar
      for (let i=0;i<data.parcVoitures.length;i++){
        if(data.parcVoitures[i].plaque ===store.plateNumber){
          piecesCar=data.parcVoitures[i];
          localStorage.setItem("piecesCar",JSON.stringify(piecesCar));
        }
      }
    } catch (error) {
      console.error('Erreur de chargement JSON:', error)
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
      localStorage.setItem('infoCar', JSON.stringify(response.data.data))
      const data = JSON.parse(localStorage.getItem('infoCar'));
      if (data) Object.assign(store, data);
    } catch (error) {
      console.error(error);
    }
  }
})


