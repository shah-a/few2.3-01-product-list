import './Categories.css';
import { categoriesUnique } from '../../data';

function Categories() {
  const categories = categoriesUnique.map((category) => {
    return <button key={category}>{category}</button>;
  });

  return (
    <div className="Categories">
      {categories}
    </div>
  );
}

export default Categories;
