import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import ProductItem from "./ProductItem.jsx";

const ProductsList = () => {
    const { productsList, isLoading } = useContext(AuthContext);
    console.log(productsList);

    return (
        <section className="products-section">
            <h2>Products</h2>
            <div className="products-div">
                {
                    isLoading ? <h2>Loading...</h2> : (
                        productsList.map(curValue => {
                            return <ProductItem key={curValue.id} product={curValue} />;
                        })
                    )

                }
            </div>
        </section>
    );
}

export default ProductsList;