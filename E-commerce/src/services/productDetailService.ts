import axios from "axios";
import { Product } from "../data/productdetail";

export const addProduct =async(Product:Product)=>{
    try {
        const { id, ...productWithoutId } = Product;    
        const res =await axios.post(`https://localhost:7183/Product/create`,
            {data:productWithoutId },
            { headers: { 'Content-Type': 'application/json' } })
    } catch (error) {
        console.error("không thể thêm sản phẩm",error);
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

export const deleteProduct=async(id:string)=>{
    try {
        const res=await axios.post(`https://localhost:7183/Product/delete`,{id},{headers:{'Content-Type':'application/json'}})
        return res.data
    } catch (error) {
        console.error("không thể xóa sản phẩm",error);
        throw error
    }
}

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