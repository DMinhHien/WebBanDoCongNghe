import React, { useState } from 'react';


// Định nghĩa kiểu cho sản phẩm
export interface Product {
  id: string;
  productName: string;
  image: string;
  unitPrice: number;
  quantity: number;
  description: string;
  categoryId: string;
  status: string;
  idShop: string
}

// Định nghĩa props cho ProductList
interface ProductListProps {
  products: Product[];
  editProduct: (productId: string) => void;
  onSelectedProductsChange: (selected: string[]) => void;
}

export default function ProductList({ products, editProduct,onSelectedProductsChange }: ProductListProps) {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  // Hàm xử lý khi thay đổi checkbox của một sản phẩm
  const handleCheckboxChange = (id: string) => {
    setSelectedProducts((prevSelected) => {
      const newSelected = prevSelected.includes(id)
        ? prevSelected.filter((productId) => productId !== id)
        : [...prevSelected, id];

      // Gọi callback để truyền selectedProducts lên component cha
      onSelectedProductsChange(newSelected);

      return newSelected;
    });
  };

  // Hàm xử lý khi chọn tất cả hoặc bỏ chọn tất cả
  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((product) => product.id));
    }
  };

  
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
              <th className="border border-gray-300 p-2 text-left">Tên sản phẩm</th>
              <th className="border border-gray-300 p-2 text-left">Đơn giá</th>
              <th className="border border-gray-300 p-2 text-left">Số lượng</th>
              <th className="border border-gray-300 p-2 text-left">Hình ảnh</th>
              <th className="border border-gray-300 p-2 text-left">Mô tả</th>
              <th className="border border-gray-300 p-2 text-left">Thao tác</th>
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
                <td className="border border-gray-300 p-2">{product.productName}</td>
                <td className="border border-gray-300 p-2">{product.unitPrice} VNĐ</td>
                <td className="border border-gray-300 p-2">{product.quantity}</td>
                <td className="border border-gray-300 p-2">
                  <img src={product.image} alt={product.productName} className="w-20 h-20 object-contain" />
                </td>
                <td className="border border-gray-300 p-2">{product.description}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={()=>editProduct(product.id)}
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
