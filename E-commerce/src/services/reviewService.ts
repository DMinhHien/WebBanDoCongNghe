import axios from "axios";
import { Comment } from "../data/comment";


export const fetchComments = async (productId: string): Promise<Comment[]> => {
    try {
      const response = await axios.get<Comment[]>(`https://localhost:7183/Comment/getListUse/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Lỗi khi lấy sản phẩm cho danh mục ${productId}:`, error);
      throw error;
    }
  };

 

  