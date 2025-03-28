import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Authorization = ({ users }) => {
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        for(const user of users) {
            if(user.email === email && user.password === password) {
                target.reset();
                alert(`Welcome ${username}`);
                navigate("/");
            }
        }
    }

    return (
        <div>
            <h1>Authorization</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter your email" required />
                <input type="password" name="password" placeholder="Enter your password" required />
                <button>Register</button>
                <p>Don't have account? <Link to="/">Register</Link></p>
            </form>
        </div>
    );
}

export default Authorization;