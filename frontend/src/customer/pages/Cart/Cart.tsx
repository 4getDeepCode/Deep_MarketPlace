import { Favorite } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { teal } from "@mui/material/colors";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CartItemCard from "./CartItemCard";
import PricingCard from "./PricingCard";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-10 lg:px-24 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* CART ITEMS */}
        <div className="lg:col-span-2 space-y-5">
          {[1, 1].map((_, index) => (
            <CartItemCard key={index} />
          ))}
        </div>

        {/* SUMMARY */}
        <div className="space-y-5 sticky top-20 h-fit">
          {/* COUPON */}
          <div className="bg-white rounded-2xl shadow-sm p-5 space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <LocalOfferIcon sx={{ color: teal[600], fontSize: 18 }} />
              Apply Coupon
            </div>

            <div className="flex gap-3">
              <TextField
                placeholder="Enter coupon code"
                size="small"
                fullWidth
              />
              <Button variant="outlined">Apply</Button>
            </div>
          </div>

          {/* PRICING */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <PricingCard />
            <div className="p-5">
              <Button
                fullWidth
                variant="contained"
                sx={{
                  py: "1rem",
                  background:
                    "linear-gradient(135deg, #22D3EE 0%, #8B5CF6 100%)",
                }}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>

          {/* WISHLIST */}
          <div className="bg-white rounded-2xl shadow-sm p-5 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition">
            <span className="font-medium">Add from Wishlist</span>
            <Favorite sx={{ color: teal[600] }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
