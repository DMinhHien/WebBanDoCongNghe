import React from 'react';

export default function ShopForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Cập nhật thông tin cửa hàng</h1>
      <form className="space-y-4 w-1/2 bg-white p-8 h-[50vh] border border-gray-300 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block mb-2 text-gray-800 font-medium">Profile picture</label>
          <input type="file" />
        </div>
        <div>
          <label className="block mb-2 text-gray-800 font-medium">Tên cửa hàng</label>
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 w-full rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-800 font-medium">Địa chỉ cửa hàng</label>
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 w-full rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
        </div>
        <div>
          <button className="bg-black text-white px-6 py-2 rounded-md mt-6 hover:bg-gray-800 transition-colors duration-200">
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
}
