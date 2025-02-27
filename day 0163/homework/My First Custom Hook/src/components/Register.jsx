const Register = () => {
    
    return (
        <form>
            <input type="text" name="fullname" placeholder="Enter your fullname" required />
            <input type="email" name="email" placeholder="Enter your email" required />
            <input type="password" name="password" placeholder="Enter your password" required />
            <button>Register</button>
            <p></p>
        </form>
    );
}

export default Register;