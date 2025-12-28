import { Divider } from "@mui/material";


const PricingCard = () => {
  return (
    <div className="text-sm">
      <div className="p-5 space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">₹99</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Discount</span>
          <span className="text-emerald-600 font-medium">−10%</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">₹79</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Platform Fee</span>
          <span className="text-emerald-600 font-medium">Free</span>
        </div>
      </div>

      <Divider />

      <div className="px-5 py-4 flex justify-between items-center text-lg font-bold">
        <span>Total</span>
        <span>₹39</span>
      </div>
    </div>
  );
};

export default PricingCard;
