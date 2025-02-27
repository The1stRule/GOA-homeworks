const Authorization = () => {
    return (
        <form>
            <input type="email" name="email" placeholder="Enter your email" required />
            <input type="password" name="password" placeholder="Enter your password" required />
            <button>Authorize</button>
            <p></p>
        </form>
    );
}

export default Authorization;