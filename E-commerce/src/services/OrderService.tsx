import { RawOrderItem,OrderUser,OrderDetail } from "../data/order";
import axios from "axios";
export const getListOrder= async(id:string) =>{
    try 
    {
        const res=await axios.get<RawOrderItem[]>(`https://localhost:7183/Receipt/getListUseShop/${id}`)
        return res.data;
    } catch (error) {
        console.error("không thể lấy danh sách đơn hàng",error);
        throw error
    }
}
export const getListOrderUser= async(id:string) =>{
    try 
    {
        const res=await axios.get<OrderUser[]>(`https://localhost:7183/Receipt/getListUse/${id}`)
        return res.data;
    } catch (error) {
        console.error("không thể lấy danh sách đơn hàng",error);
        throw error
    }
}
export const getListOrderDetail= async(id:string) =>{
    try 
    {
        const res=await axios.get<OrderDetail[]>(`https://localhost:7183/Receipt/getReceiptDetail/${id}`)
        return res.data;
    } catch (error) {
        console.error("không thể lấy danh sách đơn hàng",error);
        throw error
    }
}