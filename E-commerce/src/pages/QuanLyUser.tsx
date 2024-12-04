import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import { InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Category } from "./ChinhSuaSanPham";
import { User } from "../data/User";
import { getListUsers } from "../services/UserService";

export default function QuanLyUser() {
    const [users,setUsers]=useState<User[]>([])
    useEffect(()=>{
      getListUsers().then((data)=>{
        setUsers(data);
      })
    },[])
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  // Hàm xử lý khi thay đổi checkbox của một sản phẩm
  const handleCheckboxChange = (id: string) => {
    if (!id) return; // Nếu không có id, bỏ qua
  
    setSelectedUsers((prevSelected) => {
      const isSelected = prevSelected.includes(id);
      const newSelected = isSelected
        ? prevSelected.filter((userId) => userId !== id) // Bỏ chọn
        : [...prevSelected, id]; // Thêm vào danh sách
      return newSelected;
    });
  };

  // Hàm xử lý khi chọn tất cả hoặc bỏ chọn tất cả
  const handleSelectAll = () => {
    const newSelected = selectedUsers.length === users.length
      ? [] // Nếu đã chọn hết -> bỏ chọn tất cả
      : users.map((user) => user.id); // Nếu chưa chọn hết -> chọn tất cả
  
      setSelectedUsers(newSelected);
  };
  return (
    <div className="flex w-screen space-x-6">
      <AdminNav />
      <div className="w-[75vw] px-6">
        <div className="flex items-center justify-between mt-5 mb-7 w-[75vw] ">
          <div className="flex items-center space-x-3 w-3/4">
            <InputBase
              placeholder="Search"
              startAdornment={<Search style={{ color: "#999" }} />}
              style={{
                backgroundColor: "#F0ECE1",
                padding: "5px 10px",
                borderRadius: "20px",
                width: "500px",
              }}
            />
          </div>
          <div className="space-x-4 mt-2">
            <button
              style={{ backgroundColor: "#FBFAF1" }}
              className="border  p-4 rounded-md"
            >
              Thêm User
            </button>
            <button
              style={{ backgroundColor: "#FBFAF1" }}
              className="border  p-4 rounded-md"
            >
              Xóa User
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 ">Danh sách User</h2>
          <div className="overflow-x-auto w-[75vw]">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr style={{ backgroundColor: "#FBFAF1" }}>
                  <th className="border border-gray-300 p-2">
                    <input
                      type="checkbox"
                        checked={selectedUsers.length === users.length}
                        onChange={handleSelectAll}
                    />
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Tên Tài khoản 
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Ngày sinh
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Địa chỉ
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Chức năng
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="border border-gray-300 p-2 text-center">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleCheckboxChange(user.id)}
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                      {user.name} 
                    </td>
                    <td className="border border-gray-300 p-2">
                      {new Date(user.birthdate).toLocaleDateString()} 
                    </td>
                    <td className="border border-gray-300 p-2">
                      {user.address} 
                    </td>
                    <td className="border border-gray-300 p-2">
                  <button
                    className="bg-black text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
