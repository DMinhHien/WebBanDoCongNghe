
import { CartDetail } from "../data/cartdetail";

interface ShopDetails {
    id: string;
    name: string;
    address: string;
    phone: string;
  }

export async function fetchShopDetails(userId: string): Promise<ShopDetails> {
    const response = await fetch(`https://localhost:7183/api/shop/details/${userId}`);
    if (!response.ok) {
      throw new Error('Không thể lấy thông tin chi tiết của shop');
    }
    return response.json();
}

export async function fetchCartDetails(userId: string): Promise<CartDetail[]> {
    const response = await fetch(`https://localhost:7183/api/cart/details/${userId}`);
    if (!response.ok) {
      throw new Error('Không thể lấy danh sách sản phẩm trong giỏ hàng');
    }
    return response.json();
  }