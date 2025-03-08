const UserCard = ({ userInfo }) => {
    return (
        <div>
            <p><b>Username: </b>{userInfo.username}</p>
            <p><b>Email: </b>{userInfo.email}</p>
            <p><b>Password: </b>{userInfo.password}</p>
        </div>
    );
}

export default UserCard;