import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import Loading from "./components/Loading";

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        } catch (error) {
        console.log(error);
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
        <h1>User List</h1>
        {loading ? <Loading /> : <UserList users={users} />}
        </div>
    );
};

export default App;
