import './ProductList.css';
import data from '../../data';
import Product from '../Product/Product';

function ProductList(props) {
  let products = data.filter((product) => {
    return (props.category === 'All' || product.category === props.category);
  });

  const total = products.reduce((acc, product) => {
    return acc + parseFloat(product.price.replace('$', ''));
  }, 0);

  products = products.map((product) => {
    return (
      <Product
        key={product.id}
        name={product.name}
        price={product.price}
        category={product.category}
      />
    );
  });

  return (
    <div className="ProductList">
      <h1>Total Price: ${total.toFixed(2)}</h1>
      <div className="grid">
        {products}
      </div>
    </div>
  );
}

export default ProductList;
