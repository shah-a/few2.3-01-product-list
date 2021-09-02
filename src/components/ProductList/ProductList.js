import './ProductList.css';
import data from '../../data';
import Product from '../Product/Product';

function ProductList(props) {
  console.log(props.category);

  let products = data.filter((product) => {
    return (props.category === 'All' || product.category === props.category);
  });

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
      {products}
    </div>
  );
}

export default ProductList;
