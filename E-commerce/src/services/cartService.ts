
import axios from "axios";
import { CartDetail } from "../data/cartdetail";
interface Cart {
    id: string;
    userId: string;
  }

export async function fetchCartDetails(userId: string): Promise<CartDetail[]> {
    const response = await fetch(`https://localhost:7183/Cart/getListUse/${userId}`);
    if (!response.ok) {
      throw new Error('Không thể lấy danh sách sản phẩm trong giỏ hàng');
    }
    return response.json();
  }
  export const createCart = async (userId: string) => {
    try {
      const token = localStorage.getItem("token")
      await axios.post<Cart>('https://localhost:7183/Cart/create', { data: { userId } }, { headers: { Authorization: `Bearer ${token}` } })
    } catch (error) {
      console.error("không thể tạo giỏ hàng", error);
      throw error
    }
  }
