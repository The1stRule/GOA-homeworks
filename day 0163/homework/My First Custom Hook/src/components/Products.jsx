import AddProduct from "./AddProtuct.jsx";
import ProductsTable from "./ProductsTable.jsx";

const Products = ({ curUser, setCurUserForm, setCurUser }) => {
    return (
        <>
            <h1>Products</h1>
            <button onClick={() => setCurUser({})} >Log out</button>
            <h3>Add product</h3>
            <AddProduct setCurUserForm={setCurUserForm} />
            {
                curUser.products?.length > 0 ? <ProductsTable curUser={curUser} setCurUser={setCurUser} /> :
                <p>No products</p>
            }
        </>
    );
}

export default Products;