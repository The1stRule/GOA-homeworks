const AddProduct = () => {
    return (
        <form>
            <input type="text" name="title" placeholder="Enter product title" required />
            <input type="text" name="price" placeholder="Enter product price" required />
            <button>Add</button>
        </form>
    );
}

export default AddProduct;