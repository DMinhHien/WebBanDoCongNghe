
import axios from "axios";
import { Order } from "../data/order";
export const getListOrder= async(id:string) =>{
    try 
    {
        const res=await axios.get<Order[]>(`https://localhost:7183/Receipt/getListUseShop/${id}`)
        return res.data;
    } catch (error) {
        console.error("không thể lấy danh sách đơn hàng",error);
        throw error
    }
}