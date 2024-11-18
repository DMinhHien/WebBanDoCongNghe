import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ShopForm() {
  const nav=useNavigate();
  const handle=()=>{
    nav('/quanlyshop/QuanLyThongTin')
  }
  return (
    <div className="flex p-4">
      <div className="w-full max-w-lg">
        
        <form className="space-y-4 w-full p-4 md:p-8 bg-white h-auto border border-gray-300 rounded-lg shadow-md bg-opacity-40">
          <div className="mb-4">
            <label className="block mb-2 text-gray-800 font-medium">Profile picture</label>
            <input type="file" className="w-full" />
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
            <button style={{backgroundColor:"#FBFAF1"}} className="border px-6 py-2 rounded-md mt-6 hover:bg-gray-800 transition-colors duration-200 w-full md:w-auto">
              Cập nhật
            </button>
            <button onClick={handle} style={{backgroundColor:"#FBFAF1"}} className=" ml-12 border px-6 py-2 rounded-md mt-6 hover:bg-gray-800 transition-colors duration-200 w-full md:w-auto">
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
