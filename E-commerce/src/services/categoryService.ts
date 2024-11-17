import axios from "axios";

export interface Category {
    id: string;
    name: string;
}

export const fetchCategories = async (): Promise<Category[]> => {
    const response = await fetch('https://localhost:7183/Categories/getListUse'); // Thay bằng URL backend ASP.NET của bạn
    if (!response.ok) {
      throw new Error('Không lấy được danh mục sản phẩm');
    }
    const data = await response.json();
    return data;
  };

  export const getListCategories = async()=>{
    try {
        const res=await axios.get<Category[]>(`https://localhost:7183/Categories/getListUse`)
        return res.data;
    } catch (error) {
        console.error("không thể lấy danh sách phân loại",error);
        throw error
    }
}