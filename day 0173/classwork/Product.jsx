const Product = ({ productInfo, handleDelete }) => {
    return (
        <tr>
            <td>{productInfo.title}</td>
            <td>{productInfo.price}</td>
            <td>{productInfo.count}</td>
            <td><button onClick={() => handleDelete(productInfo.id)}>Delete</button></td>
        </tr>
    );
}

export default Product;