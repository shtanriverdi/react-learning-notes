function ProductTable({ products }) {
  return (
    <>
      <table>
        <caption>Product Table</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Orange</td>
            <td>2.5$</td>
          </tr>
          <tr>
            <td>Mint</td>
            <td>3.5$</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;
