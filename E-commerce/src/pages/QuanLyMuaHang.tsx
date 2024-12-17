import { Search } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import { useEffect, useState } from "react";
import DashboardNav from "../components/DashboardNav";
import OrderList, { Order, OrderDetail } from "../components/QuanLyMuaHang/OrderListbyUser";
import { getListOrder } from "../services/OrderService";
import { useAuth } from '../components/Auth/AuthContext';
import {getShopId} from "../services/shopService"
import { Shop } from "../data/shop";
export default function QuanLyMuaHang() {
  const [selectedOrderDetails, setSelectedOrderDetails] = useState<OrderDetail[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useAuth();
  
  const [shop, setShop] = useState<Shop|null>(null);
  //call api getListReceipt
  const orders: Order[] = [
    { id: '001', userId: 'user1', total: 200000, datetime: new Date() },
    { id: '002', userId: 'user2', total: 150000, datetime: new Date() },
];
  const filteredOrders = orders.filter((order) =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="flex w-screen">
      <DashboardNav />
      <div className="mt-10 ml-10 w-[75vw]">
        <div className="flex items-center space-x-3 w-3/4">
          <InputBase
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            placeholder="Search"
            startAdornment={<Search style={{ color: "#999" }} />}
            style={{
              backgroundColor: "#F0ECE1",
              padding: "5px 10px",
              borderRadius: "20px",
              width: "500px",
            }}
          />
        </div>
        <div className="mt-10">
          <OrderList orders={filteredOrders} />          
        </div>
      </div>
    </div>
  );
}