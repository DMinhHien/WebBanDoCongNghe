import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Định nghĩa kiểu cho sản phẩm
export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

// Định nghĩa props cho ProductList
interface ProductListProps {
  products: Product[];
  editProduct: (product: Product) => void;
}

export default function ProductList({ products, editProduct }: ProductListProps) {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  // Hàm xử lý khi thay đổi checkbox của một sản phẩm
  const handleCheckboxChange = (id: number) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((productId) => productId !== id)
        : [...prevSelected, id]
    );
  };

  // Hàm xử lý khi chọn tất cả hoặc bỏ chọn tất cả
  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((product) => product.id));
    }
  };

  const nav=useNavigate();
  const editHandle=(id:number)=>{
    nav(`/edit/${id}`)
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2 ">Danh sách sản phẩm</h2>
      <div className="overflow-x-auto w-[75vw]">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">
                <input
                  type="checkbox"
                  checked={selectedProducts.length === products.length}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="border border-gray-300 p-2 text-left">Name</th>
              <th className="border border-gray-300 p-2 text-left">Price</th>
              <th className="border border-gray-300 p-2 text-left">Quantity</th>
              <th className="border border-gray-300 p-2 text-left">Image</th>
              <th className="border border-gray-300 p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleCheckboxChange(product.id)}
                  />
                </td>
                <td className="border border-gray-300 p-2">{product.name}</td>
                <td className="border border-gray-300 p-2">{product.price} VNĐ</td>
                <td className="border border-gray-300 p-2">{product.quantity}</td>
                <td className="border border-gray-300 p-2">
                  <img src={product.image} alt={product.name} className="w-20 h-20 object-cover" />
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={()=>editHandle(product.id)}
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
  );
}
