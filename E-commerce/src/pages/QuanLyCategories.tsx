import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import { InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Category } from "./ChinhSuaSanPham";
import { createCategoty, deleteCategory, getListCategories } from "../services/categoryService";

export default function QuanLyCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [name, setName] = useState('');

  const handleCheckboxChange = (id: string) => {
    if (!id) return;

    setSelectedCategories((prevSelected) => {
      const isSelected = prevSelected.includes(id);
      return isSelected
        ? prevSelected.filter((categoryId) => categoryId !== id)
        : [...prevSelected, id];
    });
  };
  useEffect(() => {
    getListCategories().then((data)=>{
      setCategories(data);
    })
  }, []);
  const handleSelectAll = () => {
    const newSelected =
      selectedCategories.length === categories.length
        ? []
        : categories.map((category) => category.id);

    setSelectedCategories(newSelected);
  };

  const create=()=>{
    createCategoty(name).then((data)=>{
      setCategories(data);
    })
  }

  const DeleteCategory=()=>{
    selectedCategories.forEach((selectedCategorie)=>{
      deleteCategory(selectedCategorie).then((data)=>{
        setCategories(data);
      })
    })
  }

  return (
    <div className="flex w-screen">
      <AdminNav />
      <div className="w-[50vw] px-6">
        {/* Header Section */}
        <div className="mt-8 mb-7 flex justify-between items-center">
          {/* Input & Search */}
          <div className="flex flex-col space-y-4 w-full">
            <div className="flex w-full mb-12">
              <InputBase
                placeholder="Category name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  backgroundColor: "#F0ECE1",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  width: "40%",
                }}
              />
              <div className="flex  space-x-4 ml-auto">
                <button
                  style={{ backgroundColor: "#FBFAF1" }}
                  className="border p-2 rounded-md w-[150px] text-center"
                  onClick={create}
                >
                  Thêm Category
                </button>
                <button
                  style={{ backgroundColor: "#FBFAF1" }}
                  className="border p-2 rounded-md w-[150px] text-center"
                  onClick={DeleteCategory}
                >
                  Xóa Category
                </button>
              </div>
            </div>
            <InputBase
              placeholder="Search"
              startAdornment={<Search style={{ color: "#999" }} />}
              style={{
                backgroundColor: "#F0ECE1",
                padding: "5px 10px",
                borderRadius: "20px",
                width: "60%",
              }}
            />
          </div>

          {/* Action Buttons */}
        </div>

        {/* Category List */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Danh sách Category</h2>
          <div className="overflow-x-auto">
            <table className="min-w-[40%] border border-gray-300">
              <thead>
                <tr style={{ backgroundColor: "#FBFAF1" }}>
                  <th className="border border-gray-300 p-2 w-[15%] text-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories.length === categories.length}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="border border-gray-300 p-2 text-left">Tên</th>
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
