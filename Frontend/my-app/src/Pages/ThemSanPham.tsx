import React from 'react'
import DashboardNav from '../Components/DashboardNav'
import SanPhamForm from '../Components/SanPhamForm'

export default function ThemSanPham() {
  return (
    <div className='flex w-screen bg-gray-100'>
        <DashboardNav/>
        <div className='mt-10 ml-10 w-[75vw]'>
            <h1 className='font-bold text-2xl mb-3'>Thêm sản phẩm</h1>
            <SanPhamForm/>
            <div>
                <button className='bg-blue-500 text-white px-6 py-2 rounded-md mt-10 ml-8'>Thêm</button>
            </div>
        </div>
    </div>
  )
}
