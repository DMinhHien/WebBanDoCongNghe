import React from 'react'
import DashboardNav from '../Components/DashboardNav'
import ShopForm from '../Components/ShopForm'

export default function QuanLyThongTin() {
  return (
    <div className='flex w-screen'>
        <DashboardNav/>
        <div className='mt-10 ml-10 w-[75vw]'>
            <ShopForm/>
        </div>
    </div>
  )
}
