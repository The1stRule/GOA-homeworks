import { addProduct } from "../utils/handlerFunctions.js";

const AddProduct = ({ setCurUserForm }) => {
    return (
        <form onSubmit={(e) => setCurUserForm(e, addProduct)}>
            <input type="text" name="title" placeholder="Enter product title" required />
            <input type="number" name="price" placeholder="Enter product price" required />
            <button>Add</button>
        </form>
    );
}

export default AddProduct;