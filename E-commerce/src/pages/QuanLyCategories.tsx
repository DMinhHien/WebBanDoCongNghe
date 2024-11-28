import React, { useState } from "react";
import AdminNav from "../components/AdminNav";
import { InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Category } from "./ChinhSuaSanPham";

export default function QuanLyCategories() {
    const [categories,setCategories]=useState<Category[]>([])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  // Hàm xử lý khi thay đổi checkbox của một sản phẩm
  const handleCheckboxChange = (id: string) => {
    if (!id) return; // Nếu không có id, bỏ qua
  
    setSelectedCategories((prevSelected) => {
      const isSelected = prevSelected.includes(id);
      const newSelected = isSelected
        ? prevSelected.filter((categoryId) => categoryId !== id) // Bỏ chọn
        : [...prevSelected, id]; // Thêm vào danh sách
      return newSelected;
    });
  };

  // Hàm xử lý khi chọn tất cả hoặc bỏ chọn tất cả
  const handleSelectAll = () => {
    const newSelected = selectedCategories.length === categories.length
      ? [] // Nếu đã chọn hết -> bỏ chọn tất cả
      : categories.map((category) => category.id); // Nếu chưa chọn hết -> chọn tất cả
  
      setSelectedCategories(newSelected);
  };
  return (
    <div className="flex w-screen space-x-6">
      <AdminNav />
      <div className="w-[75vw] px-6">
        <div className="flex items-center justify-between mt-5 mb-7 w-[50vw] ">
          <div className="flex items-center space-x-3 w-2/4">
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
              Thêm Category
            </button>
            <button
              style={{ backgroundColor: "#FBFAF1" }}
              className="border  p-4 rounded-md"
            >
              Xóa Category
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 ">Danh sách Category</h2>
          <div className="overflow-x-auto w-[30vw]">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr style={{ backgroundColor: "#FBFAF1" }}>
                  <th className="border border-gray-300 p-2">
                    <input
                      type="checkbox"
                        checked={selectedCategories.length === categories.length}
                        onChange={handleSelectAll}
                    />
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    ID
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Tên
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td className="border border-gray-300 p-2 text-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCheckboxChange(category.id)}
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                      {category.id}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {category.name} 
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
