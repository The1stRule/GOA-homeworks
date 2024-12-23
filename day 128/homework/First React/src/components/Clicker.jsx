const Clicker = () => {
    let clickCount = 0;

    const clickCounter = () => {
        clickCount++;
        alert(`You clicked button ${clickCount} times`);
    }

    return (
        <>
            <h2>Click Counter</h2>
            <button onClick={clickCounter}>Click me</button>
        </>
    );
}


export default Clicker;