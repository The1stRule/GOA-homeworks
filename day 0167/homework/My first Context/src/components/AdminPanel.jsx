import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import UserCard from "./UserCard.jsx";

const AdminPanel = () => {
    const { users, curUser } = useContext(AuthContext);
    return (
        <div>
            <h1>Admin Panel</h1>
            <div>
                <h2>Current User</h2>
                <UserCard userInfo={curUser} />
            </div>
            <hr />
            <div>
                <h2>All Users</h2>
                {
                    users.map((curValue, index) => {
                        return (
                            <UserCard key={index} userInfo={{ ...curValue }} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default AdminPanel;