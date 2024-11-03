import React from 'react'
import DashboardNav from '../Components/DashboardNav'
import OrderList from '../Components/OrderList'
import { Order } from '../Components/OrderList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function QuanLyDonHang() {
  const orders: Order[] = [
    {
      id: 1,
      userName: 'Nguyen Van A',
      total: 500000,
      ListSP: [
        { id: 1, name: 'Product 1', image: "/img/iphone16.webp", price: 100, quantity: 2 },
        { id: 2, name: 'Product 2', image: "/img/iphone16.webp", price: 200, quantity: 2 },
      ],
    },
    {
      id: 2,
      userName: 'Tran Thi B',
      total: 300000,
      ListSP: [
        { id: 1, name: 'Product 1', image: "/img/iphone16.webp", price: 100, quantity: 2 },
        { id: 2, name: 'Product 2', image: "/img/iphone16.webp", price: 200, quantity: 2 },
      ],
    },
  ];
  return (
    <div className='flex w-screen'>
    <DashboardNav/>
    <div className='mt-10 ml-10 w-[75vw]'>
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
        <div className='mt-10'>
        <OrderList
          orders={orders}
        />
        </div>
    </div>
</div>
  )
}
