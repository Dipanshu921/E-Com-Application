import  { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_PRODUCTS_URL)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return <ProductList products={products} />;
};

export default ProductsPage;