import axios from 'axios';
import { ShopDetails } from '../data/shopdetail';

export interface Shop {
    id: string;
    name: string;
}

export const fetchShops = async (): Promise<Shop[]> => {
    const response = await axios.get('https://localhost:7183/Shop/getListUse');
    return response.data;
  };

  export const fetchShopDetails = async (shopId: string) : Promise<ShopDetails> => {
    const response = await axios.get(`https://localhost:7183/Shop/getElementById/${shopId}`);
    return response.data;
  };
  
  // Shopdetail service
  export async function getShopByUserId(userId: string): Promise<ShopDetails | null> {
    const response = await fetch(`https://localhost:7183/Shop/getElementByUserId/${userId}`);
    if (response.ok) {
      return response.json();
    }
    return null;
  }

  export async function deleteShop(shopId: string): Promise<void> {
    const response = await fetch(`https://localhost:7183/Shop/Delete/${shopId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Xóa shop không thành công');
  }

  export async function updateShop(shopData: ShopDetails): Promise<ShopDetails> {
    const response = await fetch(`https://localhost:7183/api/shop/update/${shopData.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(shopData),
    });
    return response.json();
  }

  // export async function createShop(shopData: Omit<ShopDetails, "id">): Promise<ShopDetails> {
  //   const response = await fetch('https://localhost:7183/Shop/create', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(shopData),
  //   });
  //   return response.json();
  // }

  export const createShop = async (shopData: Omit<ShopDetails, 'id'>): Promise<ShopDetails> => {
    try {
      const response = await axios.post(`https://localhost:7183/Shop/create`, {
        data: shopData  // Đóng gói shopData trong một object `data`
      });
      return response.data;
    } catch (error) {
      console.error('Lỗi khi tạo shop:', error);
      throw error;
    }
  };