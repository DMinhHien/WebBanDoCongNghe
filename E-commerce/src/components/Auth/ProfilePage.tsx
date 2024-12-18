import React, { useState, useEffect } from 'react';
import { getShopByUserId } from '../../services/shopService';
import {
  Container,
  Typography,
  Button,
  CircularProgress,
  Box,
  Grid,
  Tabs,
  Tab,
  Paper,
} from '@mui/material';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../data/shop';
import ProfileEditDialog from '../Profile/ProfileEditDialog';
const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [shop, setShop] = useState<Shop | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const navigate = useNavigate();
  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState({
    id:user?.id||'',
    AccountName: user?.accountName || '',
    Password:"",
    Role:"",
    Email: user?.email || '',
    BirthDate: user?.birthDate||new Date, // You can set this to user.birthDate if available
    Address: user?.address||'', // Same as above
    PhoneNumber:  user?.phoneNumber||'', // Same as above
  });
  // Fetch Shop Data
  useEffect(() => {
    if (user) {
      getShopByUserId(user.id)
        .then((fetchedShop) => setShop(fetchedShop))
        .catch((err) => console.error('Lỗi khi fetch dữ liệu shop:', err))
        .finally(() => setLoading(false));
    }
  }, [user]);

  // Handle Tab Change
  const handleTabChange = (_: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };
  const handleDialogOpen = () => {
    setUserInfo({
      id:user?.id||'',
      AccountName: user?.accountName || '',
      Password:"",
      Role:"",
      Email: user?.email || '',
      BirthDate: user?.birthDate||new Date, // You can set this to user.birthDate if available
      Address: user?.address||'', 
      PhoneNumber: user?.phoneNumber||'', 
    });
    setOpenEditDialog(true);
  };

  const handleDialogClose = () => {
    setOpenEditDialog(false);
  };

  const handleSave = (updatedInfo: {
    id:string;
    AccountName: string;
    Password:string,
    Role:string,
    Email: string;
    BirthDate: Date;
    Address: string;
    PhoneNumber: string;
  }) => {
    // Add logic to save the updated user information
    console.log('Saving user info:', updatedInfo);
    setUserInfo(updatedInfo);
    setOpenEditDialog(false);
  };
  if (!user) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          Bạn chưa đăng nhập.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          {/* Sidebar Tabs */}
          <Grid item xs={12} md={4}>
            <Tabs
              orientation="vertical"
              value={tabIndex}
              onChange={handleTabChange}
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Thông tin cá nhân" />
              {shop ? (
                <Tab label="Quản lý Shop" onClick={() => navigate('/quanlyshop')} />
              ) : (
                <Tab label="Tạo Shop" onClick={() => navigate('/newShop')} />
              )}
              <Tab label="Chỉnh sửa thông tin cá nhân" onClick={handleDialogOpen} />
            </Tabs>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={8}>
            {loading ? (
              <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <CircularProgress />
              </Box>
            ) : (
              <>
                {tabIndex === 0 && (
                  <Box>
                    <Typography variant="h4" component="h2" gutterBottom>
                      Thông tin cá nhân
                    </Typography>
                    <Typography variant="body1">
                      <strong>Tên:</strong> {user.accountName}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Email:</strong> {user.email}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Ngày sinh:</strong>{user.birthDate ? new Date(user.birthDate).toLocaleDateString("vi-VN") : "Chưa cập nhật"}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Địa chỉ:</strong> {user.address}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Số điện thoại:</strong> {user.phoneNumber}
                    </Typography>
                  </Box>
                )}
                {tabIndex === 1 && (
                  <Box>
                    <Typography variant="h5" color="primary">
                      {shop
                        ? 'Chuyển đến trang quản lý shop của bạn'
                        : 'Hãy tạo shop mới ngay bây giờ!'}
                    </Typography>
                  </Box>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </Paper>

      {/* Profile Edit Dialog */}
      <ProfileEditDialog
        open={openEditDialog}
        onClose={handleDialogClose}
        userInfo={userInfo}
        onSave={handleSave}
      />
    </Container>
  );
};

export default ProfilePage;
