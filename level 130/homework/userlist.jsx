import UserCard from "./UserCard";

const UserList = ({ users }) => {
    return (
        <div>
        {users.map((user) => (
            <UserCard key={user.id} user={user} />
        ))}
        </div>
    );
};

export default UserList;
