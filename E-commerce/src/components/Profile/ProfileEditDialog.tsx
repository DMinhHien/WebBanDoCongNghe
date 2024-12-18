import React, { useEffect, useState } from 'react';
import {editUser} from '../../services/UserService'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@mui/material';

interface ProfileEditDialogProps {
  open: boolean;
  onClose: () => void;
  userInfo: {
    id:string;
    AccountName: string;
    Password:string,
    Role:string,
    Email: string;
    BirthDate: Date;
    Address: string;
    PhoneNumber: string;
  };
  onSave: (updatedInfo: {
    id:string;
    AccountName: string;
    Password:string,
    Role:string,
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
    editUser(formData)
  };
  
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Chỉnh sửa thông tin cá nhân</DialogTitle>
      <DialogContent>
        <div>
          <label>Tên</label>
          <input
            type="text"
            name="AccountName"
            value={formData.AccountName} // Controlled component
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="Email"
            value={formData.Email} // Controlled component
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Ngày sinh</label>
          <input
            type="date"
            name="BirthDate"
            value={formData.BirthDate.toISOString().split("T")[0]} // Format date for input
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Địa chỉ</label>
          <input
            type="text"
            name="Address"
            value={formData.Address} // Controlled component
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Số điện thoại</label>
          <input
            type="text"
            name="PhoneNumber"
            value={formData.PhoneNumber} // Controlled component
            onChange={handleInputChange}
          />
        </div>
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