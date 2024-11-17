import React, { useEffect, useState } from 'react'
import DashboardNav from '../components/DashboardNav';
import OrderList from '../components/OrderList/OrderList';
import { Order } from '../components/OrderList/OrderList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getListOrder } from '../services/OrderService';
import { InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';
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
      <InputBase
            placeholder="Search"
            startAdornment={<Search style={{ color: "#999" }} />}
            style={{
              backgroundColor: "#F0ECE1",
              padding: "5px 10px",
              borderRadius: "20px",
              width: "500px"
            }}
          />
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
