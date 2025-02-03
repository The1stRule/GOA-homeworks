import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogIn = ({ users, setCurUser }) => {

    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        for(const user of users) {
            console.log(user)
            if(user.email === email && user.password === password) {
                setCurUser(user);
                localStorage.setItem("curUser", JSON.stringify(user));
                setIsError(false);
                e.target.reset();
                navigate("/");
                return;
            }
        }
        
        setIsError(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="Please enter your email" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" placeholder="Please enter your password" />
                <button>Submit</button>
                {
                    isError? <p>User not found</p> : ""
                }
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </>
    );
}

export default LogIn;