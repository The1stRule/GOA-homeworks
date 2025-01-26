const Presentational = ({ handleSum }) => {
    return (
        <form onSubmit={handleSum}>
            <input type="text" name="num1" required />
            <input type="text" name="num2" required />
            <button>Sum</button>
        </form>
    );
}

export default Presentational;