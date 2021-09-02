import './Product.css';

function Product(props) {
  return (
    <div className="Product">
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <p>{props.category}</p>
    </div>
  );
}

export default Product;
