
import axios from "axios";
import { User } from "../data/User";
export const getListUsers= async() =>{
    try 
    {
        const res=await axios.get<User[]>(`https://localhost:7183/User/getListUse`)
        return res.data;
    } catch (error) {
        console.error("không thể lấy danh sách đơn hàng",error);
        throw error
    }
}