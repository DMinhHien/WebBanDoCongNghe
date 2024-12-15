import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShopDetails  } from '../services/shopService'; 
import { ShopDetails } from '../data/shopdetail';
import { fetchProductsByShopId, Product } from '../services/productService';
import { Typography, Container, CircularProgress, Box } from '@mui/material';
import ProductCard from '../components/ProductCard/ProductCard';
import styles from '../components/ProductList/ProductList.module.css';
const ShopDetailPage: React.FC = () => {
  const { shopId } = useParams<{ shopId: string }>();
  const [shopDetails, setShopDetails] = useState<ShopDetails | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadShopDetails = async () => {
      try {
        const shopData = await fetchShopDetails(shopId!);
        const productData = await fetchProductsByShopId(shopId!);
        
        setShopDetails(shopData);
        setProducts(productData);
      } catch (error) {
        console.error("Không tải được dữ liệu chi tiết shop:", error);
      } finally {
        setLoading(false);
      }
    };

    loadShopDetails();
  }, [shopId]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>
      {shopDetails && (
        <>
          <Typography variant="h4" component="h2" gutterBottom>
            {shopDetails.name}
          </Typography>
          <Typography variant="body1">Địa chỉ: {shopDetails.address}</Typography>
          <Typography variant="body1">Rating: {shopDetails.rating}</Typography>
        </>
      )}

      <Typography variant="h5" sx={{ marginTop: 4 }}>
        Danh sách sản phẩm của cửa hàng {shopDetails?.name}
      </Typography>
      {products.length > 0 ? (
         <div className={styles.productList}>
         {products.map((product) => (
           <ProductCard key={product.id} product={product} />
         ))}
       </div>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Không có sản phẩm nào.
        </Typography>
      )}
    </Container>
  );
};

export default ShopDetailPage;