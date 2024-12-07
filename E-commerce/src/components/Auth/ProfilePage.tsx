// ProfilePage.tsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useAuth } from './AuthContext';
import { useNavigate } from "react-router-dom";
const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
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
      <Button > Tạo Shop </Button>
      <Button color="inherit" onClick={() => navigate('/quanlyshop')} > Quan ly Shop </Button>
    </Container>

  );
};

export default ProfilePage;