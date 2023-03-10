import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";

const Show = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });
  return (
    <div>
      <h1>Products Page</h1>
    </div>
  );
};

export default Show;
