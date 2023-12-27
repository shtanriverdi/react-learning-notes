import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './style.css';

function FilterableProductTable() {
  return (
  <div>
    <h1>Product Table</h1>
    <SearchBar />
    <ProductTable />
  </div>
  );
}

export default FilterableProductTable;