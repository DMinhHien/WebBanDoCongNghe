import React, { useState } from 'react'
import DashboardNav from '../Components/DashboardNav'
import SanPhamForm from '../Components/SanPhamForm'
import { useNavigate, useParams } from 'react-router-dom';
import { editProduct, getListProduct } from '../Service';

export default function ChinhSuaSP() {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    category: '',
    tinhtrang: '',
    quantity: '',
    description: '',
  });
  const handleProductChange = (updatedData: any) => {
    setProductData(updatedData); // Cập nhật dữ liệu khi nhận được từ component con
  };
  const navigation=useNavigate();
  const cancelHandle=()=>{
    navigation("/")
  }
  const { id } = useParams<{ id: string }>();
  const updateHandle=(id:string)=>
  {
    editProduct(id).then((data)=>{
      
    })
  }
  return (
    <div className='flex w-screen'>
        <DashboardNav/>
        <div className='mt-10 ml-10 w-[75vw]'>
            <h1 className='font-bold text-2xl mb-3'>Chỉnh sửa sản phẩm</h1>
            <SanPhamForm onProductChange={handleProductChange}/>
            <div>
                <button className='bg-blue-500 text-white px-6 py-2 rounded-md mt-10'>Cập nhật</button>
                <button onClick={cancelHandle} className='bg-white text-black px-6 py-2 rounded-md mt-10 ml-12'>Hủy bỏ</button>
            </div>
        </div>
    </div>
  )
}
