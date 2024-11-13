import React, { useState } from 'react'
import DashboardNav from '../components/DashboardNav';
import SanPhamForm from '../components/SanPhamForm';
import { useNavigate, useParams } from 'react-router-dom';
import { editProduct, getListProduct } from '../services/productDetailService'
import { Product } from '../data/productdetail';

export default function ChinhSuaSP() {
  const {id} = useParams<{ id: string }>();
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
  const updateHandle=async()=>
  {
    const productWithNumbers = {
      ...productData,
      unitPrice: parseFloat(productData.unitPrice.toString()),
      quantity: parseInt(productData.quantity.toString(), 10),
      id: id as string
    };
      await editProduct(productWithNumbers);
      navigation("/quanlyshop")
  }
  return (
    <div className='flex w-screen'>
        <DashboardNav/>
        <div className='mt-10 ml-10 w-[75vw]'>
            <h1 className='font-bold text-2xl mb-3'>Chỉnh sửa sản phẩm</h1>
            <SanPhamForm onProductChange={handleProductChange}/>
            <div>
                <button onClick={updateHandle} className='bg-blue-500 text-white px-6 py-2 rounded-md mt-10'>Cập nhật</button>
                <button onClick={cancelHandle} className='bg-white text-black px-6 py-2 rounded-md mt-10 ml-12'>Hủy bỏ</button>
            </div>
        </div>
    </div>
  )
}
