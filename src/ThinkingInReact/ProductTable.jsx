import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    // Includes Version
    // if (product.name.toLowerCase().includes(filterText.toLowerCase()) === false) {
    //   return;
    // }

    // Contains Version
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    // Put Product Categor Header
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }

    // Prefix Search Version
    // if (product.name.toLowerCase().startsWith(filterText.toLowerCase())) {
    // ...
    if (inStockOnly && product.stocked) {
      rows.push(<ProductRow key={product.name} product={product} />);
    } else if (!inStockOnly) {
      rows.push(<ProductRow key={product.name} product={product} />);
    }

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
