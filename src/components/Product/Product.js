import './Product.css';

function Product(props) {
  return (
    <div className="Product">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <strong>{props.price}</strong>
    </div>
  );
}

export default Product;
