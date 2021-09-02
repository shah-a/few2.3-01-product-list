import './App.css';
import Categories from './Categories/Categories';
import ProductList from './ProductList/ProductList';
import Footer from './Footer/Footer';

import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('All');

  return (
    <div className="App">
      <Categories category={category} setCategory={setCategory} />
      <ProductList category={category} />
      <Footer />
    </div>
  );
}

export default App;
