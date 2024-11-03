import React from 'react'
import DashboardNav from '../Components/DashboardNav'
import SanPhamForm from '../Components/SanPhamForm'

export default function ChinhSuaSP() {
  return (
    <div className='flex w-screen'>
        <DashboardNav/>
        <div className='mt-10 ml-10 w-[75vw]'>
            <h1 className='font-bold text-2xl mb-3'>Chỉnh sửa sản phẩm</h1>
            <SanPhamForm/>
            <div>
                <button className='bg-blue-500 text-white px-6 py-2 rounded-md mt-10'>Cập nhật</button>
            </div>
        </div>
    </div>
  )
}
