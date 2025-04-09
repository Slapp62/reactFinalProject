import axios from "axios";
import { useEffect, useState } from "react";
import { TUsers } from "../data/Types";

const UserTable = () => {

    const getAllUsers = async () => { 
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['x-auth-token'] = token;
            return await axios.get('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users');
        } catch (error) {
            console.error(error);
            return { data: [] };
        }
    }
   
    const [users, setUsers] = useState<TUsers[]>([]);

    useEffect(() => { 
        const loadUsers = async () => {
            try {
                const response: { data: TUsers[] } = await getAllUsers();
                setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        loadUsers();
    }, []);

    return (
        <div className="w-3/4 m-auto my-4 text-left border border-black">
            <table >
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Is Admin</th>
                        <th>Is Business</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.email}</td>
                            <td>{user.isAdmin}</td>
                            <td>{user.isBusiness}</td>
                        </tr>
                    ))}
                </tbody>
            </table>    
        </div>
    )
}

export default UserTable