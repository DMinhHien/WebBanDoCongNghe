import axios from 'axios';
import { Product } from './Components/ProductList';
import { Category } from './Components/SanPhamForm';
import { Order } from './Components/OrderList';

export const getListProduct= async() =>{
    try 
    {
        const res=await axios.get<Product[]>(`https://localhost:7183/Product/getListUse`)
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

export const deleteProduct=async(id:string)=>{
    try {
        const res=await axios.post(`https://localhost:7183/Product/delete`,{id},{headers:{'Content-Type':'application/json'}})
        return res.data
    } catch (error) {
        console.error("không thể xóa sản phẩm",error);
        throw error
    }
}

export const editProduct=async(Product:Product)=>{
    try {
        const res=await axios.post(`https://localhost:7183/Product/edit`,{data:Product },{ headers: { 'Content-Type': 'application/json' } })
    } catch (error) {
        console.error("không thể chỉnh sửa sản phẩm",error);
        throw error
    }
}
export const addProduct =async(Product:Product)=>{
    try {
        const { id, ...productWithoutId } = Product;    
        const res=await axios.post(`https://localhost:7183/Product/create`,{data:productWithoutId },{ headers: { 'Content-Type': 'application/json' } })
    } catch (error) {
        console.error("không thể thêm sản phẩm",error);
        throw error
    }
}
export const getListOrder= async(idShop:string) =>{
    try 
    {
        const res=await axios.get<Order[]>(`https://localhost:7183/Receipt/getListUse`)
        return res.data;
    } catch (error) {
        console.error("không thể lấy danh sách đơn hàng",error);
        throw error
    }
}


