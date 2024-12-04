import axios from 'axios';
import { ShopDetails } from '../data/shopdetail';

export interface Shop {
    id: string;
    name: string;
}

export const fetchShops = async (): Promise<ShopDetails[]> => {
    const response = await axios.get('https://localhost:7183/Shop/getListUse');
    return response.data;
  };

  export const fetchShopDetails = async (shopId: string) : Promise<ShopDetails> => {
    const response = await axios.get(`https://localhost:7183/Shop/getElementById/${shopId}`);
    return response.data;
  };