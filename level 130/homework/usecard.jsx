const cardStyle = {
    border: "1px solid gray",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    };

    const UserCard = ({ user }) => {
    return (
        <div style={cardStyle}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        </div>
    );
};

export default UserCard;
