
import axios from "axios";
import { User } from "../data/User";
export const getListUsers = async () => {
    try {
        const token = localStorage.getItem("token")
        const res = await axios.get<User[]>(`https://localhost:7183/User/getListUse`, { headers: { Authorization: `Bearer ${token}`, } })
        return res.data;
    } catch (error) {
        console.error("không thể lấy danh sách đơn hàng", error);
        throw error
    }
}

export const createUser = async (user: User) => {
    try {
        const { id, ...userNoId } = user;
        const res = await axios.post(`https://localhost:7183/User/Register`, userNoId)
    } catch (error) {
        console.error("không thể lấy danh sách đơn hàng", error);
        throw error
    }
}

export const deleteUser = async (id: string) => {
    try {
        const token = localStorage.getItem("token")
        await axios.delete(`https://localhost:7183/User/delete/${id}`, { headers: { Authorization: `Bearer ${token}` } })
    } catch (error) {
        console.error("không thể xóa", error);
        throw error
    }
}

export const getUser = async (id: string) => {
    try {
        const res = await axios.get(`https://localhost:7183/User/getElementById/${id}`)
        return res.data;
    } catch (error) {
        console.error("không thể xóa", error);
        throw error
    }
}

export const editUser = async (user: User) => {
    try {
        const token = localStorage.getItem("token")
        const {Password, ...tmp } = user
        const res = await axios.put(`https://localhost:7183/User/Edit`, {
            data: {
                userName: tmp.AccountName, address: tmp.Address, email: tmp.Email, birthDate: tmp.BirthDate,id:tmp.id
            }
        }, { headers: { Authorization: `Bearer ${token}` } })
    } catch (error) {
        console.error("không thể xóa", error);
        throw error
    }
}