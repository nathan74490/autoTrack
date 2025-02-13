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
  async loadJSONData() {
    try {
      const response = await fetch('/pieceDetache.json') // Assurez-vous que data.json est dans public/
      if (!response.ok) throw new Error('Erreur lors du chargement du fichier JSON')
      const data = await response.json();
      let piecesCar
      // console.log("est ce que je rentre dans le for")
      // console.log(data.parcVoitures)
      for (let i=0;i<data.parcVoitures.length;i++){
        // console.log(data.parcVoitures[i].plaque)
        // console.log(store.plateNumber)
        // console.log("est ce que je rentre dans la boucle");
        if(data.parcVoitures[i].plaque ===store.plateNumber){
          // console.log("je rentre dans le if");
          piecesCar=data.parcVoitures[i];
          // console.log(piecesCar);
          localStorage.setItem("piecesCar",JSON.stringify(piecesCar));
        }
        // console.log("je sort du if")
      }
      // console.log(piecesCar)
      // console.log(data.parcVoitures[0].plaque)
      
      // console.log("envoie des pieces effectuer");
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
      console.log(response.data);
      localStorage.setItem('infoCar', JSON.stringify(response.data.data))
      const data = JSON.parse(localStorage.getItem('infoCar'));
      if (data) Object.assign(store, data);
      console.log(data)
      console.log("pourquoi ca ne marche pas")
    } catch (error) {
      console.error(error);
    }
  }
})


