import './Categories.css';
import { categoriesUnique } from '../../data';

function Categories(props) {
  // this.innerText === props.category ? 'selected' : ''

  const categories = categoriesUnique.map((category) => {
    return (
      <button
        key={category}
        className = {props.category === category ? 'selected' : ''}
        onClick={e => props.setCategory(e.target.innerText)}
      >{category}</button>
    );
  });

  return (
    <div className="Categories">
      <button
        className = {props.category === 'All' ? 'selected' : ''}
        onClick={e => props.setCategory(e.target.innerText)}
      >All</button>
      {categories}
    </div>
  );
}

export default Categories;
