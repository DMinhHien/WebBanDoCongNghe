import React, { useState } from 'react'
import DashboardNav from '../components/DashboardNav';
import SanPhamForm from '../components/SanPhamForm';
import { useNavigate } from 'react-router-dom'
import { Product } from '../data/productdetail';
import { addProduct } from '../services/productDetailService';

export default function ProductCreate() {
  const [productData, setProductData] = useState<Product>({
    id: '',
    productName: '',
    image: '',
    unitPrice: 0,
    quantity: 0,
    description: '',
    categoryId: '',
    status: '',
    idShop:''
  });
  const handleProductChange = (updatedData: any) => {
    setProductData(updatedData); // Cập nhật dữ liệu khi nhận được từ component con
  };
  const navigation=useNavigate();
  const cancelHandle=()=>{
    navigation("/quanlyshop")
  }
  const addHandle=async()=>{
    const productWithNumbers = {
      ...productData,
      unitPrice: parseFloat(productData.unitPrice.toString()),
      quantity: parseInt(productData.quantity.toString(), 10)
    };
      await addProduct(productWithNumbers)
      navigation("/quanlyshop")
  }
  return (
    <div className='flex w-full'>
        <DashboardNav/>
        <div className='mt-10 ml-10 w-[75vw]'>
            <h1 className='font-bold text-2xl mb-3'>Thêm sản phẩm</h1>
            <SanPhamForm onProductChange={handleProductChange}/>
            <div className='w-full'>
                <button onClick={addHandle} className='bg-blue-500 text-white px-6 py-2 rounded-md mt-10 ml-8'>Thêm sản phẩm</button>
                <button onClick={cancelHandle} className='bg-white text-black px-6 py-2 rounded-md mt-10 ml-12'>Hủy bỏ</button>
            </div>
        </div>
    </div>
  )
}