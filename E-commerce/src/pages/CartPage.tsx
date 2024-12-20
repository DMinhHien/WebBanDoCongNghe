import { useEffect, useState } from "react";
import { Cart, ProductCart } from "../data/Cart";
import {
  deleteCartItem,
  editQuantity,
  getCarts,
} from "../services/cartService";
import { useAuth } from "../components/Auth/AuthContext";
import CartItem from "../components/CartItem";
import { createReceipt } from "../services/OrderService";
import { useNavigate } from "react-router-dom";
import logo from "../../public/check (1).png";

export default function CartPage() {
  const [carts, setCarts] = useState<Cart>({
    id: "",
    userId: "",
    shops: [],
  });
  const { user } = useAuth();
  const nav = useNavigate();
  const [total, setTotal] = useState(0);
  const updateTotal = () => {
    let tmp = 0;
    carts.shops.map((shop) => {
      shop.products.map((product) => {
        tmp = tmp + product.quantity * product.productInfo.unitPrice;
      });
    });
    setTotal(tmp);
  };
  useEffect(() => {
    if (user) {
      getCarts(user?.id as string).then((data) => {
        setCarts(data[0]);
        updateTotal();
      });
    }
  }, [user]);
  useEffect(() => {
    if (carts) {
      updateTotal();
    }
  }, [carts]);
  const DeleteCartItem = (id: string) => {
    deleteCartItem(id);
    setCarts((prevCarts) => {
      const updatedShops = prevCarts.shops.map((shop) => ({
        ...shop,
        products: shop.products.filter((product) => product.id !== id),
      }));
      return { ...prevCarts, shops: updatedShops };
    });
  };
  const updateQuantity = (
    idCart: string,
    shopId: string,
    productId: string,
    newQuantity: number
  ) => {
    setCarts((prevCart) => ({
      ...prevCart,
      shops: prevCart.shops.map((shop) =>
        shop.shopId === shopId
          ? {
              ...shop,
              products: shop.products.map((product) =>
                product.idProduct === productId
                  ? { ...product, quantity: newQuantity }
                  : product
              ),
            }
          : shop
      ),
    }));
    editQuantity(carts.id, idCart, productId, newQuantity);
  };
  const CreateReceipt = async () => {
    if (!carts || !carts.shops) {
      console.error("Giỏ hàng trống hoặc không hợp lệ");
      return;
    }

    // Gom toàn bộ sản phẩm từ các cửa hàng
    const tmp = carts.shops.flatMap((shop) => shop.products);

    // Gửi dữ liệu tạo hóa đơn
      createReceipt(carts.userId, tmp as ProductCart[]).then((data)=>{
        nav(`/receipt/${data.id}`)
      })
  };

  return (
    <section className="bg-white py-8 antialiased  md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {carts?.shops?.map((shop) => (
                <div>
                  <div
                    className="flex items-center space-x-2 mb-2"
                    key={shop.shopId}
                  >
                    <img
                      className="w-auto h-10 object-contain"
                      src={shop.shopInfo.image}
                      alt="shop.shopInfo.name"
                    />
                    <span className="font-semibold">{shop.shopInfo.name}</span>
                  </div>
                  {shop.products.map((product) => (
                    <div>
                      <CartItem
                        ProductCart={product}
                        onQuantityChange={(productId, newQuantity) =>
                          updateQuantity(
                            product.id,
                            shop.shopId,
                            productId,
                            newQuantity
                          )
                        }
                        DeleteCartItem={() => DeleteCartItem(product.id)}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div
              style={{ backgroundColor: "#FBFAF1" }}
              className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6"
            >
              <p className="text-xl font-semibold text-gray-900 ">
                Order summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 ">
                      {total} VNĐ
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900 ">
                      30000 VNĐ
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 ">Total</dt>
                  <dd className="text-base font-bold text-gray-900 ">
                    {total + 30000} VNĐ
                  </dd>
                </dl>
              </div>

              <button
                className=" p-1 w-full border bg-white text-black rounded-md"
                onClick={CreateReceipt}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}