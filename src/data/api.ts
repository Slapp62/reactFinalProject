import axios from "axios";


const getCards = async () => {
      return await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards");
     
    }

export default getCards