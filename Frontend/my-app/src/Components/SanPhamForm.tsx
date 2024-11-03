import React from 'react';

export default function SanPhamForm() {
  return (
    <form className="space-y-4 w-1/2 border border-gray-300 p-8 rounded-lg shadow-md bg-white h-[55vh]">
      <div className="mb-4">
        <label className="block mb-2 text-gray-800 font-medium">Profile picture</label>
        <input type="file" />
      </div>
      <div>
        <label className="block mb-2 text-gray-800 font-medium">Tên sản phẩm</label>
        <input type="text" className="px-4 py-2 border border-gray-300 w-full rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700" />
      </div>
      <div>
        <label className="block mb-2 text-gray-800 font-medium">Đơn giá</label>
        <input type="text" className="px-4 py-2 border border-gray-300 w-full rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700" />
      </div>
      <div>
        <label className="block mb-2 text-gray-800 font-medium">Phân loại</label>
        <input type="text" className="px-4 py-2 border border-gray-300 w-full rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700" />
      </div>
      <div>
        <label className="block mb-2 text-gray-800 font-medium">Số lượng</label>
        <input type="text" className="px-4 py-2 border border-gray-300 w-full rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700" />
      </div>
    </form>
  );
}
