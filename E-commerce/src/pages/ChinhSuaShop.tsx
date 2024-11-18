import { useState } from "react";
import DashboardNav from "../components/DashboardNav";
import ShopForm from "../components/ShopForm/ShopForm";
import { ShopDetails } from "../data/shopdetail";

export default function ChinhSuaShop() {
  const [shopDetail, setShopDetail] = useState<ShopDetails>();
  return (
    <div className="flex w-screen">
      <DashboardNav />
      <div className="mt-10 ml-10 w-[75vw] flex">
        <ShopForm/>
      </div>
    </div>
  );
}
