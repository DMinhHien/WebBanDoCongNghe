import { Search } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import { useEffect, useState } from "react";
import DashboardNav from "../components/DashboardNav";
import OrderList, { Order } from "../components/OrderList/OrderList";
import { getListOrder } from "../services/OrderService";
import { useAuth } from "../components/Auth/AuthContext";
import {getShopByUserId} from "../services/shopService"
import { Shop } from "../data/shop";
export default function QuanLyDonHang() {
  const [searchTerm, setSearchTerm] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const { user } = useAuth();
  const [shop, setShop] = useState<Shop|null>(null);
  //call api getListReceipt
  const idShop = "ddcf2539-4";
  useEffect(() => {
    getListOrder(idShop).then((data) => {
      setOrders(data);
    });
  }, []);
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
