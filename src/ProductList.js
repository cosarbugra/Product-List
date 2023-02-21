import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.filter((product) => product.unitsInStock > 0));
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Stock</th>
          <th>Unit Price</th>
          <th>Quantity Per Unit</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} style={{ backgroundColor: product.unitPrice > 20 ? 'red' : 'transparent' }}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.unitsInStock}</td>
            <td>{product.unitPrice}</td>
            <td>{product.quantityPerUnit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;