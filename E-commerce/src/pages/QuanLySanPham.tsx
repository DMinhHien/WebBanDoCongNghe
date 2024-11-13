import  { useEffect, useState } from 'react';
import DashboardNav from '../components/DashboardNav';
import ProductList from '../components/Another/ProductList';
import { Product } from '../data/productdetail';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { deleteProduct, getListProduct } from '../services/productDetailService';

export default function QuanLySP() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const handleSelectedProductsChange = (selected: string[]) => {
    setSelectedProducts(selected);
  };
  useEffect(()=>{
    getListProduct().then((data)=>{
      setProducts(data);
    })
  },[])

  const editProduct = (product: Product) => {
    console.log('Editing product:', product);
  };

  const navigation=useNavigate();
  

  const newHandle=()=>{
    navigation("/quanlyshop/new")
  }

  const editHandle=(id:string)=>{
    navigation(`quanlyshop/edit/${id}`)
  }

  const handleDelete=(selectedProducts: string[])=>()=>{
    selectedProducts.forEach(selectedProduct => {
      deleteProduct(selectedProduct).then(()=>{
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== selectedProduct)
        );
      })
    });
  }
  
  return (
    <div className='flex w-screen space-x-6'>
      <DashboardNav />
      <div className='w-[75vw] px-6'>
        <div className='flex items-center justify-between mt-5 mb-7 w-[75vw] '>
          <div className='flex items-center space-x-3 w-3/4'>
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              className="p-2 border border-black rounded-md w-1/3 mr-2"
            />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className='space-x-4 mt-2'>
            <button onClick={newHandle} className='bg-black text-white p-4 rounded-md'>Thêm sản phẩm</button>
            <button onClick={handleDelete(selectedProducts)} className='bg-black text-white p-4 rounded-md'>Xóa sản phẩm</button>
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