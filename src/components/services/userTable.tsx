import axios from "axios";

const UserTable = () => {

    const getAllUsers = async () => { 
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['x-auth-token'] = token;
            const response = await axios.get('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users');
            //return response.data;
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    getAllUsers();
   
}

export default UserTable