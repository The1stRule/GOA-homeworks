import { handleDelete } from "../utils/handlerFunctions.js";

const ProductsTable = ({ curUser, setCurUser }) => {
    return (
        <div>
            <h3>Products Table</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Del</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        curUser.products.map((curValue, index) => {
                            return (
                                <tr key={curValue.id}>
                                    <td>{index + 1}</td>
                                    <td>{curValue.title}</td>
                                    <td>{curValue.price}</td>
                                    <td><button onClick={() => handleDelete(setCurUser, curValue.id)}>Del</button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ProductsTable;