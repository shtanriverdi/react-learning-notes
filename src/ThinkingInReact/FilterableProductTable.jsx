import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import "./style.css";

function FilterableProductTable({ products }) {
  return (
    <div>
      <h1>Product Table</h1>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductTable;
