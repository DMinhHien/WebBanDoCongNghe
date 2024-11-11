import axios from 'axios';
import { Product } from './Components/ProductList';
import { Category } from './Components/SanPhamForm';
import { Order } from './Components/OrderList';

export const getListProduct= async(idShop:string) =>{
    try 
    {
        const res=await axios.get<Product[]>(`https://localhost:7183/Product/getListUseShop/${idShop}`)
        return res.data;
    } catch (error) {
        console.error("không thể lấy danh sách sản phẩm",error);
        throw error
    }
}

export const getListCategories = async()=>{
    try {
        const res=await axios.get<Category[]>(`https://localhost:7183/Categories/getListUse`)
        return res.data;
    } catch (error) {
        console.error("không thể lấy danh sách phân loại",error);
        throw error
    }
}

export const deleteProduct=async(id:string,idShop:string)=>{
    try {
        const res=await axios.delete(`https://localhost:7183/Product/delete/${id}`)
        return getListProduct(idShop)
    } catch (error) {
        console.error("không thể xóa sản phẩm",error);
        throw error
    }
}

export const editProduct=async(id:string)=>{
    try {
        const res=await axios.put(`https://localhost:7183/Product/edit/${id}`)
    } catch (error) {
        console.error("không thể chỉnh sửa sản phẩm",error);
        throw error
    }
}
export const addProduct =async(Product:Product)=>{
    try {
        const res=await axios.get<Order[]>(`https://localhost:7183/Product/create`)
    } catch (error) {
        console.error("không thể thêm sản phẩm",error);
        throw error
    }
}
export const getListOrder= async(idShop:string) =>{
    try 
    {
        const res=await axios.get<Order[]>(`https://localhost:7183/Receipt/getListUseShop`)
        return res.data;
    } catch (error) {
        console.error("không thể lấy danh sách đơn hàng",error);
        throw error
    }
}


