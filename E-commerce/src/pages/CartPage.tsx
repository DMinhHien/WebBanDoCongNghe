import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useAuth } from '../components/Auth/AuthContext'
import { fetchShopDetails, fetchCartDetails } from '../services/cartService';

interface CartDetail {
  id: string;
  cartId: string;
  productId: string;
  quantity: number;
}

interface ShopDetails {
  id: string;
  name: string;
  address: string;
  phone: string;
}

const CartPage: React.FC = () => {
  const { user } = useAuth();
  const [shopDetails, setShopDetails] = useState<ShopDetails | null>(null);
  const [cartDetails, setCartDetails] = useState<CartDetail[]>([]);

  useEffect(() => {
    if (user) {
      // Lấy thông tin chi tiết của shop
      fetchShopDetails(user.id).then(setShopDetails);

      // Lấy danh sách giỏ hàng chi tiết
      fetchCartDetails(user.id).then(setCartDetails);
    }
  }, [user]);

  if (!user) {
    return <Typography variant="h6">Vui lòng đăng nhập để xem giỏ hàng.</Typography>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" mb={2}>Giỏ hàng của bạn:</Typography>

      {shopDetails && (
        <Box mb={4}>
          <Typography variant="h6">Thông tin shop:</Typography>
          <Typography>Tên: {shopDetails.name}</Typography>
          <Typography>Địa chỉ: {shopDetails.address}</Typography>
          <Typography>Số điện thoại: {shopDetails.phone}</Typography>
        </Box>
      )}

      <Typography variant="h6" mb={2}>Danh sách sản phẩm trong giỏ hàng:</Typography>
      <List>
        {cartDetails.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`Product ID: ${item.productId}`}
              secondary={`Số lượng: ${item.quantity}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CartPage;