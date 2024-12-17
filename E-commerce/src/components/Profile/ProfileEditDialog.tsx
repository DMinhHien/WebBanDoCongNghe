import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from '@mui/material';

interface ProfileEditDialogProps {
  open: boolean;
  onClose: () => void;
  userInfo: {
    userName: string;
    email: string;
    dob: string;
    address: string;
    phone: string;
  };
  onSave: (updatedInfo: {
    userName: string;
    email: string;
    dob: string;
    address: string;
    phone: string;
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
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Chỉnh sửa thông tin cá nhân</DialogTitle>
      <DialogContent>
        <TextField
          label="Tên"
          fullWidth
          margin="normal"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Ngày sinh"
          fullWidth
          margin="normal"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Địa chỉ"
          fullWidth
          margin="normal"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <TextField
          label="Số điện thoại"
          fullWidth
          margin="normal"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Hủy
        </Button>
        <Button onClick={handleSave} color="primary">
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileEditDialog;