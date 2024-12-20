import { useEffect, useState } from "react";
import logo from "../../public/check (1).png";
import { OrderDetail } from "../data/order";
import { useParams } from "react-router-dom";
import { getReceiptDetail } from "../services/OrderService";

export default function ReceiptPage() {
    const [OrderDetails,setOrderDetails]=useState<OrderDetail[]>([]);
    const { id } = useParams<{ id: string }>();
    useEffect(()=>{
        if(id)
            getReceiptDetail(id).then((data)=>{
                console.log(data)
                setOrderDetails(data)
        })
    },[])
  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto py-0 md:py-16">
        <article className="shadow-none md:shadow-2xl md:rounded-md overflow-hidden">
          <div className="md:rounded-b-md  bg-white">
            <div className="p-9 border-b border-gray-200">
              <div className="space-y-6 w-full flex flex-col items-center justify-center">
                <h2 className="text-green-500 text-2xl font-extrabold text-center">
                  Đặt hàng thành công
                </h2>
                <img src={logo} alt="check" />
              </div>
            </div>
            <div className="p-9 space-y-2 border-b border-gray-200">
              <p className="font-medium text-sm text-gray-400">
                Tên khách hàng
              </p>
              <p className=" text-sm"> ABC </p>
              <p className="font-medium text-sm text-gray-400">
                Ngày tạo đơn hàng
              </p>
              <p className=" text-sm"> đ/mm//yyyy </p>
            </div>
            <table className="w-full divide-y divide-gray-200 text-sm">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-3/4 px-9 py-4 text-left font-semibold text-gray-400"
                  >
                    Item
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-left font-semibold text-gray-400"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-9 py-5 whitespace-nowrap space-x-1 flex items-center">
                    <div>
                      <p> Jericho III (YA-4) </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap text-gray-600 truncate">
                    $380,000.00
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="p-9 border-b border-gray-200">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-500 text-sm"> Subtotal </p>
                  </div>
                  <p className="text-gray-500 text-sm"> $660,000.00 </p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-500 text-sm"> Tax </p>
                  </div>
                  <p className="text-gray-500 text-sm"> $0.00 </p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-500 text-sm"> Total </p>
                  </div>
                  <p className="text-gray-500 text-sm"> $660,000.00 </p>
                </div>
              </div>
            </div>
            <div className="p-9 border-b border-gray-200">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold text-black text-lg"> Amount Due </p>
                  </div>
                  <p className="font-bold text-black text-lg"> $360.00 </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
