import {
  IconButton,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { deleteCoupon } from "../../../Redux Toolkit/Admin/AdminCouponSlice";
import { Coupon } from "../../../types/couponTypes";
import { DeleteOutline } from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CouponTable() {
  const adminCoupon = useAppSelector((store) => store.adminCoupon);
  const dispatch = useAppDispatch();

  const handleDeleteCoupon = (id: string) => () => {
    dispatch(deleteCoupon({ id, jwt: localStorage.getItem("jwt") || "" }));
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Coupon Code</StyledTableCell>
              <StyledTableCell>Start Date</StyledTableCell>
              <StyledTableCell>End Date</StyledTableCell>
              <StyledTableCell>Min Order Value</StyledTableCell>
              <StyledTableCell>Discount %</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminCoupon.coupons?.map((coupon: Coupon) => (
              <StyledTableRow key={coupon._id}>
                <StyledTableCell component="th" scope="row">
                  {coupon.code}
                </StyledTableCell>
                <StyledTableCell>{coupon.validityStartDate}</StyledTableCell>
                <StyledTableCell>{coupon.validityEndDate}</StyledTableCell>
                <StyledTableCell>{coupon.minimumOrderValue}</StyledTableCell>
                <StyledTableCell>{coupon.discountPercentage}</StyledTableCell>
                <StyledTableCell align="right">
                  {coupon.active ? "Active" : "Deactive"}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <IconButton onClick={handleDeleteCoupon(coupon._id)}>
                    <DeleteOutline className="text-red-700 cursor-pointer" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
