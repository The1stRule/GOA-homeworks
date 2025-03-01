import { addProduct } from "../utils/handlerFunctions.js";

const AddProduct = ({ setCurUserForm }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setCurUserForm(e.target, addProduct)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Enter product title" required />
            <input type="text" name="price" placeholder="Enter product price" required />
            <button>Add</button>
        </form>
    );
}

export default AddProduct;