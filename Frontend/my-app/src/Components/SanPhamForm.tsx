import React, { useState } from 'react';

export default function SanPhamForm() {
  const [categories, setCategories] = useState([
    "option1", "option2", "option3"
  ]);
  const [tinhtrangs, setTinhtrangs] = useState([
    "mới (100%)", "đã sử dụng (99%)", "đã sử dụng (90%)", "đã sử dụng(80%)"
  ]);

  return (
    <form className="space-y-4 w-full md:w-1/2 max-w-lg border border-gray-300 p-4 md:p-8 rounded-lg shadow-md bg-white bg-opacity-40">
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
        <select className="px-4 py-2 border border-gray-300 w-full rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700">
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block mb-2 text-gray-800 font-medium">Tình trạng</label>
        <select className="px-4 py-2 border border-gray-300 w-full rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700">
          {tinhtrangs.map((tinhtrang, index) => (
            <option key={index} value={tinhtrang}>{tinhtrang}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block mb-2 text-gray-800 font-medium">Số lượng</label>
        <input type="text" className="px-4 py-2 border border-gray-300 w-full rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700" />
      </div>
      <div>
        <label className="block mb-2 text-gray-800 font-medium">Mô tả</label>
        <textarea
          className="px-4 py-2 border border-gray-300 w-full rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700 h-24 resize-none"
          rows={4}
        ></textarea>
      </div>
    </form>
  );
}
