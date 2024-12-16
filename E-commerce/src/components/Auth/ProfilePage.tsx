// ProfilePage.tsx
import React from 'react';
import { useState, useEffect } from 'react';
import { getShopByUserId } from '../../services/shopService';
import { Container, Typography, Button } from '@mui/material';
import { useAuth } from './AuthContext';
import { useNavigate } from "react-router-dom";
import AddShopForm from '../ShopForm/AddShopForm';
import {Shop} from '../../data/shop'
const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [shop, setShop] = useState<Shop|null>(null);
  const navigate = useNavigate();
  if (!user) {
    return <Typography variant="h6">Bạn chưa đăng nhập</Typography>;
  }
  useEffect(() => {
    if (user) {
      getShopByUserId(user.id).then((fetchedShop) => setShop(fetchedShop));
    }
  }, [user]);
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Thông tin cá nhân
      </Typography>
      <Typography variant="body1">Tên: {user.userName}</Typography>
      <Typography variant="body1">Email: {user.email}</Typography>
      {shop ? (
        <Button  onClick={() => navigate('/newShop')}> Tạo Shop </Button>
      ) : ( <Button color="inherit" onClick={() => navigate('/quanlyshop')} > Quan ly Shop </Button>)}

    </Container>

  );
};

export default ProfilePage;