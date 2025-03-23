import { useState } from "react"
import Product from "./Product";

const AdminPanel = () => {
    const [products, setProducts] = useState([]);

    const addProduct = (e) => {
        e.preventDefault();
        const newObj = {};

        for(const [key, value] of new FormData(e.target()).entries()) {
            newObj[key] = value;
        }

        setProducts(prev => {
            return [...prev, { id: Date.now(), ...newObj, count: 1 }]
        })
    }

    const handleDelete = (delId) => {
        setProducts(prev => prev.filter(curValue => curValue.id !== delId));
    }

    return (
        <main>

            <form onSubmit={addProduct}>
                <input type="text" name="title" placeholder="Enter product title" required />
                <input type="text" name="description" placeholder="Enter product description" required />
                <input type="text" name="price" placeholder="Enter product ptice" required />
                <button>Add Product</button>
            </form>
            <section>
                <h2>Admin Panel</h2>
                <p>Welcome to the admin panel</p>
                <p>Username: {user?.username}</p>
                <p>Email: {user?.email}</p>
            </section>

            <section>
                <h2>Manage Products</h2>
                <table border="1">
                    <thead>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 && products.map((curValue, index) => {
                                return <Product key={index} productInfo={curValue} handleDelete={handleDelete} />;
                            })
                        }
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default AdminPanel;