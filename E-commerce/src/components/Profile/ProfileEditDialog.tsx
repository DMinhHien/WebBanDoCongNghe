import React, { useState } from 'react';
import { editUser } from '../../services/UserService';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Grid,
  Box,
} from '@mui/material';

interface ProfileEditDialogProps {
  open: boolean;
  onClose: () => void;
  userInfo: {
    id: string;
    AccountName: string;
    Password: string;
    Role: string;
    Email: string;
    BirthDate: Date;
    Address: string;
    PhoneNumber: string;
  };
  onSave: (updatedInfo: {
    id: string;
    AccountName: string;
    Password: string;
    Role: string;
    Email: string;
    BirthDate: Date;
    Address: string;
    PhoneNumber: string;
  }) => void;
}

const ProfileEditDialog: React.FC<ProfileEditDialogProps> = ({
  open,
  onClose,
  userInfo,
  onSave,
}) => {
  const [formData, setFormData] = useState(userInfo);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    editUser(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Chỉnh sửa thông tin cá nhân
      </DialogTitle>
      <DialogContent>
        <Box component="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tên"
                name="AccountName"
                value={formData.AccountName}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="Email"
                type="email"
                value={formData.Email}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Ngày sinh"
                name="BirthDate"
                type="date"
                value={formData.BirthDate.toISOString().split('T')[0]}
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Địa chỉ"
                name="Address"
                value={formData.Address}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Số điện thoại"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between', padding: '16px' }}>
        <Button onClick={onClose} color="secondary" variant="outlined">
          Hủy
        </Button>
        <Button onClick={handleSave} color="primary" variant="contained">
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileEditDialog;
