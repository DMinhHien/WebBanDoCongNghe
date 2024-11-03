import React from 'react';
import { Product } from './ProductList';

export interface Order {
  id: number;
  userName: string;
  total: number;
  ListSP: Product[];
}

interface OrderListProps {
  orders: Order[];
}


export default function OrderList({orders}:OrderListProps) {
  return (
    <div className="overflow-x-auto w-[75vw]">
      <h2 className="text-xl font-bold mb-2 ">Danh sách Đơn hàng</h2>
      <table className="min-w-full border-gray-300">
        <thead>
          <tr className="text-left bg-gray-200 text-gray-800">
            <th className="border border-gray-300 py-2 px-4 border-b">Mã đơn hàng</th>
            <th className="border border-gray-300 py-2 px-4 border-b">Tên người mua</th>
            <th className="border border-gray-300 py-2 px-4 border-b">Tổng tiền</th>
            <th className="border border-gray-300 py-2 px-2 border-b">Danh sách sản phẩm</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-gray-700">
              <td className="border border-gray-300 py-2 px-4 border-b">{order.id}</td>
              <td className="border border-gray-300 py-2 px-4 border-b">{order.userName}</td>
              <td className="border border-gray-300 py-2 px-4 border-b">{order.total.toLocaleString('vi-VN')} VND</td>
              <td className="border border-gray-300 py-2 px-2 border-b">
                <ul className="list-disc pl-5">
                  {order.ListSP.map((product) => (
                    <li key={product.id}>
                      {product.name}
                      <label className='w-full ml-10'>x7</label>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}