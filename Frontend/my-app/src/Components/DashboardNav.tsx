import React from 'react'
import { Link } from 'react-router-dom'


export default function DashboardNav() {
  return (
    <nav className="w-64 bg-black text-white flex flex-col p-4 space-y-4 h-screen">
      <Link to="/" className="py-2 px-4 rounded hover:bg-gray-700 mt-20 text-lg ">Quản lý sản phẩm</Link>
      <Link to="/QuanLyDonHang" className="py-2 px-4 rounded hover:bg-gray-700 text-lg ">Quản lý đơn hàng</Link>
      <Link to="/QuanLyThongTin" className="py-2 px-4 rounded hover:bg-gray-700 text-lg ">Thay đổi thông tin</Link>
    </nav>
  )
}
