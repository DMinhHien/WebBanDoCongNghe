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
  const [shop, setShop] = useState<Shop|null>({
    id: "",
    userId: "",
    userName: "",
    name: "",
    address: "",
    rating: 0,
    image: ""
  });
  const handleShopAdded = (newShop: Shop) => {
    setShop(newShop);
    setIsAddingShop(false);
  };
  const [isAddingShop, setIsAddingShop] = useState(false); 
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
        <Button color="inherit" onClick={() => navigate('/quanlyshop')} > Quan ly Shop </Button>
      ) : ( <Button variant="contained" color="primary" onClick={() => setIsAddingShop(true)}>
      Tạo Shop
    </Button>)}
       {isAddingShop && (
        <AddShopForm onClose={() => setIsAddingShop(false)} onShopAdded={handleShopAdded} />
      )}
    </Container>

  );
};

export default ProfilePage;