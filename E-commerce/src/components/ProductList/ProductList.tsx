import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from './ProductList.module.css';
import ProductCard from '../ProductCard/ProductCard';

interface Product {
    id: number;
    productName: string;
    unitPrice: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      // Hàm fetch data từ API
      const fetchProducts = async () => {
        try {
          const response = await axios.get<Product[]>('https://localhost:7183/Product/getListUse');
          setProducts(response.data);
          setLoading(false);
        } catch (error) {
          setError('Không thể lấy dữ liệu sản phẩm');
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);
  
    if (loading) return <p>Đang tải dữ liệu...</p>;
    if (error) return <p>{error}</p>;
  
    return (
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );

};


export default ProductList;