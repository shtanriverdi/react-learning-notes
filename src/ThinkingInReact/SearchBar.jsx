function SearchBar() {
  return (
    <form  className="container flex">
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
