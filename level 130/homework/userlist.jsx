<<<<<<< HEAD
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
=======
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
>>>>>>> 3e4aedcfcb60f0755a974138520d60342f27e98b
