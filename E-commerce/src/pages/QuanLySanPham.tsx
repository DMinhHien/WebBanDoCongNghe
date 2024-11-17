import { Search } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/Another/ProductList";
import DashboardNav from "../components/DashboardNav";
import { Product } from "../data/productdetail";
import {
  deleteProduct,
  getListProduct,
} from "../services/productDetailService";

export default function QuanLySP() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const handleSelectedProductsChange = (selected: string[]) => {
    setSelectedProducts(selected);
  };
  useEffect(() => {
    getListProduct().then((data) => {
      setProducts(data);
    });
  }, []);

  const navigation = useNavigate();

  const newHandle = () => {
    navigation("/quanlyshop/new");
  };

  const editHandle = (id: string) => {
    navigation(`/quanlyshop/edit/${id}`);
  };

  const handleDelete = (selectedProducts: string[]) => () => {
    selectedProducts.forEach((selectedProduct) => {
      deleteProduct(selectedProduct).then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== selectedProduct)
        );
      });
    });
  };

  return (
    <div className="flex w-screen space-x-6">
      <DashboardNav />
      <div className="w-[75vw] px-6">
        <div className="flex items-center justify-between mt-5 mb-7 w-[75vw] ">
          <div className="flex items-center space-x-3 w-3/4">
            <InputBase
              placeholder="Search"
              startAdornment={<Search style={{ color: "#999" }} />}
              style={{
                backgroundColor: "#F0ECE1",
                padding: "5px 10px",
                borderRadius: "20px",
                width: "500px",
              }}
            />
          </div>
          <div className="space-x-4 mt-2">
            <button
              style={{ backgroundColor: "#FBFAF1" }}
              onClick={newHandle}
              className="border  p-4 rounded-md"
            >
              Thêm sản phẩm
            </button>
            <button
              style={{ backgroundColor: "#FBFAF1" }}
              onClick={handleDelete(selectedProducts)}
              className="border  p-4 rounded-md"
            >
              Xóa sản phẩm
            </button>
          </div>
        </div>
        <ProductList
          products={products}
          editProduct={editHandle}
          onSelectedProductsChange={handleSelectedProductsChange}
        />
      </div>
    </div>
  );
}
