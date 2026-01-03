import { Box, Button, Divider } from "@mui/material";

import OrderStepper from "./OrderStepper";
import { Payments } from "@mui/icons-material";

const OrderDetails = () => {
  return (
    <Box className="space-y-5 ">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[100px]"
          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRnDaBUwtU0zb6OCu_C6C-NNOcT78nyilKkJxKrxSASTOBdmIUCJO0HhJ15P7hRjXxc2xyBaGJwpdpDZNUnTaWx6Ro9xj6RmWp6KNgWTsMi9KC5IPrntXor"
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">Deep MarketPlace</h1>
          <p>C J Enterprise Women's Kanjivaram Silk Saree</p>
          <p>
            <strong>Size:</strong>M
          </p>
        </div>
        <div>
          <Button>Write Review</Button>
        </div>
      </section>

      <section className="border p-5">
        <OrderStepper />
      </section>

      <div className="border p-5">
        <h1 className="font-bold pb-3">Delivery Address</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p> Abhi Kumar</p>
            <Divider flexItem orientation="vertical" />
            <p>9265227411</p>
          </div>

          <p>saraimeer, mirjapur, Azamgarh-276540</p>
        </div>
      </div>

      <div className="border  space-y-4">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">Total Item Price</p>
            <p>
              You saved{" "}
              <span className="text-green-500 font-medium text-xs">
                ₹7500.00
              </span>{" "}
              on this item
            </p>
          </div>

          <p className="font-medium">₹ 12495.00</p>
        </div>

        <div className="px-5 ">
          <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3 ">
            <Payments />
            <p>Pay On Delivery</p>
          </div>
        </div>

        <Divider />
        <div className="px-5 pb-5">
          <p className="text-xs">
            <strong>Sold by : </strong>
            Deep Clothing
          </p>
        </div>

        <div className="p-5">
          <Button
            color="error"
            sx={{ py: "0.7rem" }}
            className=""
            variant="outlined"
            fullWidth
          >
             
              Cancel Order
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OrderDetails;
