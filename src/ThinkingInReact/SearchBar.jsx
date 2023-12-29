function SearchBar() {
  return (
    <form className="container flex mb-10">
      <input className="mb-5" type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
