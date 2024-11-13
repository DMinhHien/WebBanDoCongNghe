import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardNav() {
  return (
    <nav className="w-64 bg-black text-white flex flex-col p-6 h-screen shadow-xl sticky top-0">
      <h2 className="text-2xl font-bold text-center mb-10">Dashboard</h2>
      <Link to="/quanlyshop" className="py-3 px-6 rounded-lg hover:bg-gray-700 text-lg transition-colors duration-200">
        Quản lý sản phẩm
      </Link>
      <Link to="/quanlyshop/QuanLyDonHang" className="py-3 px-6 rounded-lg hover:bg-gray-700 text-lg transition-colors duration-200">
        Quản lý đơn hàng
      </Link>
      <Link to="/quanlyshop/QuanLyThongTin" className="py-3 px-6 rounded-lg hover:bg-gray-700 text-lg transition-colors duration-200">
        Thay đổi thông tin
      </Link>
    </nav>
  )
}