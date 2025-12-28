
import { Add, Close, Remove } from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";

const CartItemCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm relative overflow-hidden">
      {/* CONTENT */}
      <div className="p-5 flex gap-4">
        <img
          className="w-[100px] h-[130px] object-cover rounded-xl"
          src="https://ik.imagekit.io/4sjmoqtje/tr:w-1000,c-at_max/cdn/shop/files/green-tissue-saree-with-bead-and-cutdana-embroidery-sg338770-6.jpg?v=1757674612"
          alt=""
        />

        <div className="flex-1 space-y-1">
          <h2 className="font-semibold text-lg">Deep Clothing</h2>

          <p className="text-gray-600 text-sm">
            Inclusive of all taxes · Free shipping above ₹1500
          </p>

          <p className="text-gray-400 text-xs">
            Sold by: Natural Lifestyle Products Pvt Ltd
          </p>

          <p className="text-xs font-medium text-emerald-600">
            7 days replacement available
          </p>
        </div>
      </div>

      <Divider />

      {/* FOOTER */}
      <div className="px-5 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-1">
          <IconButton size="small" color="primary">
            <Remove />
          </IconButton>

          <span className="font-semibold">2</span>

          <IconButton size="small" color="primary">
            <Add />
          </IconButton>
        </div>

        <p className="font-semibold text-gray-900 text-lg">₹3999</p>
      </div>
      <div className="absolute top-1 right-1">
        {/* REMOVE */}
        <IconButton
          size="small"
          className="absolute top-2 right-2"
          color="primary"
        >
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItemCard;
