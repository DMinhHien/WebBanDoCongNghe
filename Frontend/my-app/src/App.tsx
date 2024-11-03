import React from 'react';
import { Route, Routes } from "react-router-dom";
import QuanLyDonHang from './Pages/QuanLyDonHang';
import QuanLySP from './Pages/QuanLySP';
import QuanLyThongTin from './Pages/QuanLyThongTin';
import ThemSanPham from './Pages/ThemSanPham';
import ChinhSuaSP from './Pages/ChinhSuaSP';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<QuanLySP />}/>
      <Route path="new" element={<ThemSanPham />} />
      <Route path="edit/:id" element={<ChinhSuaSP />} />
      <Route path="QuanLyDonHang" element={<QuanLyDonHang />} />
      <Route path="QuanLyThongTin" element={<QuanLyThongTin />} />
    </Routes>
  );
}
