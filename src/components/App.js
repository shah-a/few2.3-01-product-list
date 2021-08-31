import './App.css';
import data, { categories, categoriesUnique, categoriesCount, namesAndCategories } from '../data';

import Buttons from './Buttons/Buttons';

function App() {
  return (
    <div className="App">
      <Buttons list={namesAndCategories} />
    </div>
  );
}

export default App;
