import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    // Put Product Categor Header
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.category} category={product.category} />);
    }
    rows.push(<ProductRow key={product.name} product={product} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
