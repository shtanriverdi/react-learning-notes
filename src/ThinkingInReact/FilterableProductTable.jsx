import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import "./style.css";
import { useState } from "react";

function FilterableProductTable({ products }) {
  const [filterText, setfilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <h1>Product Table</h1>
      <SearchBar
        onfilterTextChange={setfilterText}
        onInStockOnlyChange={setInStockOnly}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={products}
      />
    </div>
  );
}

export default FilterableProductTable;
