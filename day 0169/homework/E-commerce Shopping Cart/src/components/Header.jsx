const Header = () => {
    return (
        <header>
            <div className="logo-div">
                <img id="logo" src="/shopping-cart-logo.png" alt="logo" />
            </div>
            <nav>
                <p>Home</p>
                <p>Products</p>
                <p>About us</p>
            </nav>
            <button>Contact us</button>
        </header>
    );
}

export default Header;