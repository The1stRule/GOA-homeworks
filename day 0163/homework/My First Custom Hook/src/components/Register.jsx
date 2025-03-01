import { Link } from "react-router-dom";
import { register } from "../utils/handlerFunctions.js";
import { useError } from "../hooks/useError.js";

const Register = ({ setUsersForm }) => {
    const [isError, handleError] = useError();

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsersForm(e.target, register, handleError);
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fullname" placeholder="Enter your fullname" required />
                <input type="email" name="email" placeholder="Enter your email" required />
                <input type="password" name="password" placeholder="Enter your password" required />
                <button>Register</button>
                <p>Already have an account? <Link to="/authorization">Authorization</Link> </p>
            </form>
            <p>{isError ? "The email already exists!" : ""}</p>
        </div>
    );
}

export default Register;