import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ users, setUsers }) => {

    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        for(const user of users) {
            if(user.email === e.target.email.value) {
                setIsError(true);
                e.target.reset();
                return;
            }
        }

        const newUser = {
            email: e.target.email.value,
            password: e.target.password.value,
            taskList: []
        }
    

        setUsers(prev => {
            localStorage.setItem("users", JSON.stringify([...prev, newUser]));
            return [...prev, newUser]
        });
        e.target.reset();
        setIsError(false);
        navigate("/login");
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
                    isError? <p>Email is taken</p> : ""
                }
            </form>
            <p>Already have an account? <Link to="/login">Sign In</Link></p>
        </>
    );
}

export default SignUp;