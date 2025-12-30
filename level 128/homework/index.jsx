import { useEffect, useState } from "react";

function App() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!res.ok) {
            throw new Error("Failed to fetch users");
            }
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        }

        fetchUsers();
    }, []);

    const containerStyle = {
        padding: "20px",
        fontFamily: "Arial",
        display: "flex",
        gap: "20px"
    };

    const listStyle = {
        width: "40%"
    };

    const userItemStyle = {
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid black",
        cursor: "pointer"
    };

    const detailStyle = {
        width: "60%",
        padding: "15px",
        border: "1px solid black"
    };

    if (loading) {
        return <h2 style={{ padding: "20px" }}>Loading...</h2>;
    }

    if (error) {
        return <h2 style={{ padding: "20px", color: "red" }}>{error}</h2>;
    }

    return (
        <div style={containerStyle}>
        <div style={listStyle}>
            <h2>Users</h2>
            {users.map((user) => (
            <div
                key={user.id}
                style={userItemStyle}
                onClick={() => setSelectedUser(user)}
            >
                <p><b>{user.name}</b></p>
                <p>{user.email}</p>
            </div>
            ))}
        </div>

        <div style={detailStyle}>
            <h2>User Details</h2>
            {selectedUser ? (
            <>
                <p><b>Name:</b> {selectedUser.name}</p>
                <p><b>Email:</b> {selectedUser.email}</p>
                <p><b>Phone:</b> {selectedUser.phone}</p>
                <p><b>Website:</b> {selectedUser.website}</p>
            </>
            ) : (
            <p>Click a user to see details</p>
            )}
        </div>
        </div>
    );
}

export default App;
