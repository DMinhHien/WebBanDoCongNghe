import React, { useState } from 'react';
import DashboardNav from '../Components/DashboardNav';
import ProductList from '../Components/ProductList';
import { Product } from '../Components/ProductList';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export default function QuanLySP() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Product 1', image: "/img/iphone16.webp", price: 100, quantity: 2 },
    { id: 2, name: 'Product 2', image: "/img/iphone16.webp", price: 200, quantity: 2 },
  ]);

  const editProduct = (product: Product) => {
    console.log('Editing product:', product);
  };

  const navigation=useNavigate();

  const newHandle=()=>{
    navigation("/new")
  }


  return (
    <div className='flex w-screen space-x-6'>
      <DashboardNav />
      <div className='w-[75vw] px-6'>
        <div className='flex items-center justify-between mt-5 mb-7 w-[75vw] '>
          <div className='flex items-center space-x-3 w-3/4'>
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              className="p-2 border border-black rounded-md w-1/3 mr-2"
            />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className='space-x-4 mt-2'>
            <button onClick={newHandle} className='bg-black text-white p-4 rounded-md'>Thêm sản phẩm</button>
            <button className='bg-black text-white p-4 rounded-md'>Xóa sản phẩm</button>
          </div>
        </div>
        <ProductList
          products={products}
          editProduct={editProduct}
        />
      </div>
    </div>
  );
}
