import React from 'react';
import styles from './ProductCard.module.css'
import { Product } from '../../data/products';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <div className={styles.productCard}>
      <h3 className={styles.title}>{product.productName}</h3>
      <p className={styles.price}>{product.unitPrice}</p>
    </div>
  );
  
  export default ProductCard;