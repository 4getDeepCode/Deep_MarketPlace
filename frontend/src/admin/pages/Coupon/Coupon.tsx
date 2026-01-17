import { useEffect } from "react";
import { useAppDispatch } from "../../../Redux Toolkit/Store";
import { fetchAllCoupons } from "../../../Redux Toolkit/Admin/AdminCouponSlice";
import CouponTable from "./CouponTable";

const Coupon = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllCoupons(localStorage.getItem("jwt") || ""));
  }, []);
  return (
    <div>
      <CouponTable />
    </div>
  );
};

export default Coupon;
