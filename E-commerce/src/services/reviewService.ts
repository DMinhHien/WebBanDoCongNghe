import axios from "axios";
import { CommentDTO } from "../data/comment";


export const fetchComments = async (productId: string): Promise<Comment[]> => {
    try {
      const response = await axios.get<Comment[]>(`https://localhost:7183/Comment/getListUse/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Lỗi khi lấy sản phẩm cho danh mục ${productId}:`, error);
      throw error;
    }
  };
  export const addComment =async(Comment:CommentDTO)=>{
    try {
      const { id, ...commentWithoutId } = Comment;     
        const token = localStorage.getItem("token")
        await axios.post(`https://localhost:7183/Comment/create`,{data:commentWithoutId },{ headers: { Authorization: `Bearer ${token}` } })
    } catch (error) {
        console.error("không thể thêm sản phẩm",error);
        throw error
    }
}
 

  