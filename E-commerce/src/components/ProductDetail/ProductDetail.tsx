import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './ProductDetail.module.css';

interface Product {
    id: number;
    productName: string;
    unitPrice: string;
    quantity: number;
    status: string;
    description: string;  
   // imageUrl: string;
}
const ProductDetail: React.FC =() => {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(`https://localhost:7183/Product/getElementById/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError('Không thể tải thông tin chi tiết sản phẩm');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>{error}</p>;
return (
    <div className={styles.productInfo}>
    {product && (
      <>
        <h1 className={styles.productTitle}>{product.productName}</h1>
        <p className={styles.productPrice}>{product.unitPrice}</p>
        <p className={styles.quantity}>{product.quantity}</p>
        <p className={styles.status}>{product.status}</p>
        <p className={styles.description}>{product.description}</p>
      </>
    )}
  </div>
);
};
export default ProductDetail;