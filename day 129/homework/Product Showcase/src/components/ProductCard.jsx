const ProductCard = ({product}) => {
    const {id, name, price, description} = product;

    return (
        <div>
            <h2>{name}</h2>
            <p><b>{price}</b></p>
            <p>{description}</p>
        </div>
    );
}

export default ProductCard;