import React from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { OrderDetail } from './OrderListbyUser';
import { useAuth } from '../Auth/AuthContext';
import Rating from '@mui/material/Rating';
import DashboardNav from '../DashboardNav';
const orderDetails: OrderDetail[] = [
    { id: 'd001', idReceipt: '001', product: { id: 'p1', productName: 'Sản phẩm A' }, quantity: 2 },
    { id: 'd002', idReceipt: '001', product: { id: 'p2', productName: 'Sản phẩm B' }, quantity: 1 },
    { id: 'd003', idReceipt: '002', product: { id: 'p3', productName: 'Sản phẩm C' }, quantity: 4 },
];

export default function ChiTietDonHang() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [isDialogOpen, setDialogOpen] = useState(false);
    // Lọc ra chi tiết đơn hàng tương ứng
    const details = orderDetails.filter((detail) => detail.idReceipt === id);
    const [selectedProduct, setSelectedProduct] = useState<{ id: string; name: string } | null>(null);
    const [content, setContent] = useState('');
    const [rating, setRating] = useState<number | null>(0);
    const openDialog = (productId: string, productName: string) => {
        setSelectedProduct({ id: productId, name: productName });
        setDialogOpen(true);
    };
    const closeDialog = () => {
        setDialogOpen(false);
        setContent('');
        setRating(0);
    };
    const handleSubmit = () => {
        const review = {
            id: `review_${Date.now()}`, // Tự tạo id duy nhất
            productId: selectedProduct?.id,
            content,
            rating,
        };
        console.log('Review Submitted:', review);
        alert('Review đã được gửi thành công!');
        closeDialog();
    };
    return (
        <div className="flex w-screen">
            <DashboardNav />
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Chi tiết Đơn hàng: {id}</h2>
            <table className="min-w-full border border-gray-300 bg-white">
                <thead>
                    <tr className="text-left" style={{ backgroundColor: '#FBFAF1' }}>
                        <th className="border border-gray-300 py-2 px-4">Mã sản phẩm</th>
                        <th className="border border-gray-300 py-2 px-4">Tên sản phẩm</th>
                        <th className="border border-gray-300 py-2 px-4">Số lượng</th>
                        <th className="border border-gray-300 py-2 px-4">Tương tác</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((detail) => (
                        <tr key={detail.id}>
                            <td className="border border-gray-300 py-2 px-4">{detail.product.id}</td>
                            <td className="border border-gray-300 py-2 px-4">{detail.product.productName}</td>
                            <td className="border border-gray-300 py-2 px-4">{detail.quantity}</td>
                            <td className="border border-gray-300 py-2 px-4">
                                <button
                                     onClick={() => openDialog(detail.product.id, detail.product.productName)}
                                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
                                >
                                    Thêm review
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Dialog */}
            {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-bold mb-4">Thêm Review cho {selectedProduct?.name}</h2>
                        <label className="block mb-2">
                            Nội dung:
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full border rounded p-2 mt-1"
                                rows={4}
                            ></textarea>
                        </label>
                        <label className="block mb-4">
                            Rating:
                            <div className="mt-1">
                                <Rating
                                    name="simple-controlled"
                                    value={rating}
                                    onChange={(event, newValue) => {
                                        setRating(newValue);
                                    }}
                                />
                            </div>
                        </label>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={closeDialog}
                                className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-4 rounded"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
                            >
                                Gửi
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
}