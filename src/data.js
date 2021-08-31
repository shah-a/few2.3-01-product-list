import data from './data.json';

const categories = data.map(product => product.category);

const categoriesUnique = [...new Set(categories)];

const categoriesCount = data.reduce((obj, product) => {
  if (obj[product.category]) {
    obj[product.category] += 1
    return obj
  }
  obj[product.category] = 1
  return obj
}, {});

const namesAndCategories = categoriesUnique.map((category) => {
  return { name: category, count: categoriesCount[category] }
});

export default data;

export {
  categories,
  categoriesUnique,
  categoriesCount,
  namesAndCategories
};
