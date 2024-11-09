import React from 'react'
import DashboardNav from '../Components/DashboardNav'
import SanPhamForm from '../Components/SanPhamForm'
import { useNavigate } from 'react-router-dom'

export default function ThemSanPham() {
  const navigation=useNavigate();
  const cancelHandle=()=>{
    navigation("/")
  }

  return (
    <div className='flex w-full'>
        <DashboardNav/>
        <div className='mt-10 ml-10 w-[75vw]'>
            <h1 className='font-bold text-2xl mb-3'>Thêm sản phẩm</h1>
            <SanPhamForm/>
            <div className='w-full'>
                <button className='bg-blue-500 text-white px-6 py-2 rounded-md mt-10 ml-8'>Thêm sản phẩm</button>
                <button onClick={cancelHandle} className='bg-white text-black px-6 py-2 rounded-md mt-10 ml-12'>Hủy bỏ</button>
            </div>
        </div>
    </div>
  )
}
