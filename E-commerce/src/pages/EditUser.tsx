import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import { User } from "../data/User";
import { editUser, getUser } from "../services/UserService";

export default function EditUser() {
  const [user, setUser] = useState<User>({
    id: "",
    Email: "",
    AccountName: "",
    Password: "",
    BirthDate: new Date(),
    Address: "",
  });
  const nav = useNavigate();
  const { id: userId } = useParams();
  useEffect(() => {
    getUser(userId as string).then((data) => {
      console.log(data);
      setUser({
        id: data[0].id,
        Email: data[0].email,
        AccountName: data[0].accountName,
        Password: "",
        BirthDate: new Date(data[0].birthDate),
        Address: data[0].address,
      });
    });
  }, []);

  const edit = () => {
    const isEmptyField = Object.entries(user).some(([key, value]) => {
      if (key === "BirthDate" || key === "id" || key === "Password")
        return false;
      return value === "";
    });

    if (isEmptyField) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    editUser(user).then(() => {
      nav("/admin/QuanLyUser/");
    });
  };

  const cancel = () => {
    nav("/admin/QuanLyUser");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: name === "BirthDate" ? new Date(value) : value,
    }));
  };
  return (
    <div className="flex w-full">
      <AdminNav />
      <div className="mt-10 ml-10 w-[75vw]">
        <h1 className="font-bold text-2xl mb-3">Chỉnh sửa User</h1>
        <form className="space-y-4 w-full md:w-1/2 max-w-lg border border-gray-300 p-4 md:p-8 rounded-lg shadow-md bg-white bg-opacity-40">
          <div className="mb-4">
            <label className="block mb-2 text-gray-800 font-medium">
              Email
            </label>
            <input
              type="text"
              value={user?.Email}
              name="Email"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 w-full rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-800 font-medium">
              Tên người dùng
            </label>
            <input
              type="text"
              value={user?.AccountName}
              name="AccountName"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 w-full rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-800 font-medium">
              Ngày sinh
            </label>
            <input
              type="date"
              value={user.BirthDate.toISOString().split("T")[0]}
              name="BirthDate"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 w-full rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-800 font-medium">
              Địa chỉ
            </label>
            <input
              type="text"
              value={user?.Address}
              name="Address"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 w-full rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </div>
        </form>
        <div className="w-full">
          <button
            style={{ backgroundColor: "#1E3A8A" }}
            className=" text-white px-6 py-2 rounded-md mt-10 ml-8"
            onClick={edit}
          >
            Chỉnh sửa
          </button>
          <button
            className="border bg-white text-black px-6 py-2 rounded-md mt-10 ml-12"
            onClick={cancel}
          >
            Hủy bỏ
          </button>
        </div>
      </div>
    </div>
  );
}
