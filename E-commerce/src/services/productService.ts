import axios from "axios";
export interface Product {
    id: number;
    productName: string;
    unitPrice: string;
  }


export const fetchProductsByCategory = async (categoryId: string): Promise<Product[]> => {
    try {
      const response = await axios.get<Product[]>(`/api/products?categoryId=${categoryId}`);
      return response.data;
    } catch (error) {
      console.error(`Lỗi khi lấy sản phẩm cho danh mục ${categoryId}:`, error);
      throw error;
    }
  };