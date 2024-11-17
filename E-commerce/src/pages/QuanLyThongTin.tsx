import DashboardNav from "../components/DashboardNav";
import ShopForm from "../components/ShopForm/ShopForm";

export default function QuanLyThongTin() {
  return (
    <div className="flex w-screen">
      <DashboardNav />
      <div className="mt-10 ml-10 w-[75vw]">
        <ShopForm />
      </div>
    </div>
  );
}
