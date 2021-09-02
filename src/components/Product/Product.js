import './Product.css';

function Product(props) {
  return (
    <div className="Product">
      <h1>{props.name}</h1>
      <h1>{props.price}</h1>
      <p>{props.category}</p>
    </div>
  );
}

export default Product;
