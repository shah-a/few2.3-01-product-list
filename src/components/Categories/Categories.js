import './Categories.css';
import { namesAndCategories } from '../../data';

function Categories(props) {
  const categoryButtons = namesAndCategories.map((category) => {
    return (
      <button
        key={category.name}
        className={props.category === category.name ? 'selected' : ''}
        onClick={() => props.setCategory(category.name)}
      >{category.name} <small>({category.count})</small></button>
    );
  });

  const totalCount = namesAndCategories.reduce((acc, category) => {
    return acc + category.count
  }, 0)

  const allButton = <button
    className={props.category === 'All' ? 'selected' : ''}
    onClick={() => props.setCategory('All')}
  >All <small>({totalCount})</small></button>

  return (
    <div className="Categories">
      {allButton}
      {categoryButtons}
    </div>
  );
}

export default Categories;
