import { useEffect, useState } from "react";
import { Cart } from "../data/Cart";
import { getCarts } from "../services/cartService";
import { useAuth } from "../components/Auth/AuthContext";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const [carts, setCarts] = useState<Cart>({
    id: "",
    userId: "",
    shops: [],
  });
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      getCarts(user?.id as string).then((data) => {
        setCarts(data[0]);
      });
    }
  }, [user]);
  const updateQuantity = (shopId: string, productId: string, newQuantity: number) =>()=>{
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
                  {shop.products.map((product)=>(
                    <div className="space-y-3">
                      <CartItem ProductCart={product}
                      onQuantityChange={updateQuantity(shop.shopId,product.idProduct,product.quantity)}/>
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
                      $7,592.00
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900 ">
                      $99
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 ">Total</dt>
                  <dd className="text-base font-bold text-gray-900 ">
                    $8,191.00
                  </dd>
                </dl>
              </div>

              <button className=" p-1 w-full border bg-white text-black rounded-md">
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
