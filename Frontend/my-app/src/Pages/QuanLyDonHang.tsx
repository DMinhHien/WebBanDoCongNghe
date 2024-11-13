import React, { useEffect, useState } from 'react'
import DashboardNav from '../Components/DashboardNav'
import OrderList from '../Components/OrderList'
import { Order } from '../Components/OrderList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getListOrder } from '../Service';
export default function QuanLyDonHang() {
  const [orders, setOrders] = useState<Order[]>([])
  const idShop="123"
  useEffect(()=>{
    getListOrder(idShop).then((data)=>{
      setOrders(data);
    })
  },[])
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
