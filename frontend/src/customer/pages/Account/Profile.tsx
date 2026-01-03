import { Divider } from "@mui/material";
import Order from "./Order";
import OrderDetails from "./OrderDetails";

const menu = [
  { name: "orders", path: "/account/orders" },
  { name: "profile", path: "/account/profile" },
  { name: "Saved Cards", path: "/account/saved-card" },

  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: "/" },
];

const Profile = () => {
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
              className={`${menu.length - 1 !== index ? "border-b border-gray-300" : ""} ${
                item.path == location.pathname
                  ? "bg-gray-300 text-white"
                  : ""
              } px-5 py-3 rounded-md hover:bg-teal-500 hover:text-white cursor-pointer `}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="lg:col-span-2 lg:pl-5 py-5">
          {/* <Order/> */}
          <OrderDetails/>

        </div>
      </div>
    </div>
  );
};

export default Profile;
