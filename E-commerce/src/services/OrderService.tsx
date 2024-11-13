import { Order } from "../components/OrderList/OrderList";
import axios from "axios";
export const getListOrder= async(idShop:string) =>{
    try 
    {
        const res=await axios.get<Order[]>(`https://localhost:7183/Receipt/getListUse`)
        return res.data;
    } catch (error) {
        console.error("không thể lấy danh sách đơn hàng",error);
        throw error
    }
}