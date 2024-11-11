// ProfilePage.tsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useAuth } from './AuthContext';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Thông tin cá nhân
      </Typography>
      <Typography variant="body1">Tên: {user?.name}</Typography>
      
      <Typography variant="body1">Email: {user?.email}</Typography>
      <Button > Tạo Shop </Button>
    </Container>

  );
};

export default ProfilePage;