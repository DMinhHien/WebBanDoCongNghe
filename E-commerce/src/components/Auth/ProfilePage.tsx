// ProfilePage.tsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Card, CardContent, IconButton, Container, } from '@mui/material';
import { useAuth } from './AuthContext';
import { useNavigate } from "react-router-dom";
import { ShopDetails } from '../../data/shopdetail';
import { getShopByUserId, deleteShop } from '../../services/shopService';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShopForm from '../ShopForm/AddShopForm';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [shop, setShop] = useState<ShopDetails | null>(null);
  const [isAddingShop, setIsAddingShop] = useState(false);
  

  useEffect(() => {
    if (user) {
      getShopByUserId(user.id).then((fetchShopDetails) => setShop(fetchShopDetails));
    }
  },[user]);

  const handleShopAdded = (newShop: ShopDetails) => {
    setShop(newShop);
    setIsAddingShop(false);
  };

  

  const handleDeleteShop = async () => {
    if (shop && window.confirm('Bạn có chắc chắn muốn xóa shop này?')) {
      await deleteShop(shop.id);
      setShop(null); // Cập nhật lại trạng thái để ẩn shop sau khi xóa
      alert('Shop đã được xóa thành công.');
    }
  };


  if (!user) {
    return <Typography variant="h6">Bạn chưa đăng nhập</Typography>;
  }
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Thông tin cá nhân
      </Typography>
      <Typography variant="body1">Tên: {user.userName}</Typography>
      <Typography variant="body1">Email: {user.email}</Typography>
      {shop ? (
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h6">Thông Tin Shop</Typography>
            {shop.image && (
        <Box component="img" src={shop.image} alt="Shop Image" sx={{ width: '100%', height: 'auto', mb: 2 }} />
      )}
            <Typography>Tên shop: {shop.name}</Typography>
            <Typography>Địa chỉ: {shop.address}</Typography>
            <Typography>Rating: {shop.rating}</Typography>
            <Box mt={2}>
              <IconButton color="primary" >
                <EditIcon /> Sửa
              </IconButton>
              <IconButton color="secondary" onClick={handleDeleteShop}>
                <DeleteIcon /> Xóa
              </IconButton>
            </Box>
            <Button color="inherit" onClick={() => navigate('/quanlyshop')} > Quan ly Shop </Button>
          </CardContent>
        </Card>
      ) : (
        <Button variant="contained" color="primary" sx={{ mt: 4 }} onClick={() => setIsAddingShop(true)}>
          Thêm Shop
        </Button>
      )}  
       {/* Hiển thị form thêm shop */}
  {isAddingShop && (
    <AddShopForm onClose={() => setIsAddingShop(false)} onShopAdded={handleShopAdded} />
  )}   
    </Container>

  );

};

export default ProfilePage;