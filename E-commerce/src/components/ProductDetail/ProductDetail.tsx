import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './ProductDetail.module.css';
import { Product } from '../../data/products';
import { Box, createTheme, Divider, ThemeProvider } from "@mui/material";
import MainProduct from "./MainProduct/MainProduct";
import Reviews from './Review/Review';
interface Props {
  product: Product;
}

const DividerSection = () => (
  <Divider
    sx={{ width: "90%", margin: "0 auto", borderBottomWidth: 2, marginY: 6 }}
  />
);

const theme = createTheme({
  typography: {
    fontFamily: "Nunito",
  },
});

const ProductDetail: React.FC() => {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const {product}
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(`https://localhost:7183/Product/getElementById/${id}`);
        product = response.data;
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
  <ThemeProvider theme={theme}>
  <Box px={3} pt={5} justifyContent="center" alignItems="center">
    <MainProduct product={product} />
    <DividerSection />
    <Reviews />
    <DividerSection />
  </Box>
</ThemeProvider>
);
};
export default ProductDetail;