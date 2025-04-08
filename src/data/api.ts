import axios from "axios";


const getCards = async () => {
      return await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards");
    }

const getLoginToken = async (email:string, password:string) => {
   return await axios.post("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
    {
      email,
      password
  });
  
}

export {getCards, getLoginToken}