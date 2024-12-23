import ProductCard from "./ProductCard";

const ProductList = ({products}) => {
    return (
        <>
            {
                products.map(curValue => {
                    return <ProductCard key={curValue.id} product={curValue} />
                })
            }
        </>
    );
}

export default ProductList;