import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {


  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data.data))

  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        products.map(product => <ProductCard product={product}></ProductCard>)
      }
    </div>
  );
};

export default Home;
