function SearchBar({
  filterText,
  inStockOnly,
  onfilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form className="container flex mb-10">
      <input
        value={filterText}
        onChange={(event) => onfilterTextChange(event.target.value)}
        className="mb-5"
        type="text"
        placeholder="Search..."
      />
      <label>
        <input
          onChange={(event) => onInStockOnlyChange(event.target.checked)}
          type="checkbox"
          checked={inStockOnly}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
