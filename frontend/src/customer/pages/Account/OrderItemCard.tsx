import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";





const OrderItemCard = () => {
 
  return (
    <div
      className="text-sm bg-white p-5 space-y-3 border border-gray-300 rounded-md cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-teal-600">pending</h1>
          <p>Arriving by</p>
        </div>
      </div>
      <div className="p-5 bg-teal-50 flex gap-3 ">
        <div className="">
          <img className="w-[70px]" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRnDaBUwtU0zb6OCu_C6C-NNOcT78nyilKkJxKrxSASTOBdmIUCJO0HhJ15P7hRjXxc2xyBaGJwpdpDZNUnTaWx6Ro9xj6RmWp6KNgWTsMi9KC5IPrntXor" alt="" />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">
            Deep MarketPlace
          </h1>
          <p>C J Enterprise Women's Kanjivaram Silk Saree</p>
          <p>
            <strong>size : </strong>
            FREE
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;
