import { Divider } from "@mui/material";
import Order from "./Order";
import OrderDetails from "./OrderDetails";
import { Route, Routes, useNavigate } from "react-router";
import UserDetails from "./UserDetails";
import SavedCards from "./SavedCards";
import Addresses from "./Addresses";

const menu = [
  { name: "orders", path: "/account/orders" },
  { name: "profile", path: "/account/profile" },
  { name: "Saved Cards", path: "/account/saved-card" },

  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: "/" },
];



const Profile = () => {

  const navigate = useNavigate();
  
  return (
    <div className="px-5 lg:px-52 min-h-screen mt-10 ">
      <div>
        <h1 className="text-xl font-bold pb-5">Deep</h1>
      </div>
      <Divider />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
        <div className="col-span-1 lg:border-r border-gray-300 lg:pr-5 py-5 h-full  flex flex-row flex-wrap lg:flex-col gap-3">
          {menu.map((item, index) => (
            <div
            onClick={() => navigate(item.path)}
              className={`${
                menu.length - 1 !== index ? "border-b border-gray-300" : ""
              } ${
                item.path == location.pathname ? "bg-gray-300 text-white" : ""
              } px-5 py-3 rounded-md hover:bg-teal-500 hover:text-white cursor-pointer `}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="lg:col-span-2 lg:pl-5 py-5">

          <Routes>
            <Route path="/" element={<UserDetails />} />
            <Route path="/orders" element={<Order />} />
            <Route
              path="/orders/:orderId/item/:orderItemId"
              element={<OrderDetails />}
            />
            <Route path="/profile" element={<UserDetails />} />
            <Route path="/saved-card" element={<SavedCards />} />
            <Route path="/addresses" element={<Addresses />} />
            

          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Profile;
