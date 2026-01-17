import { styled } from "@mui/material/styles";
import { Button, Dialog, IconButton, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import * as React from "react";
import { Product } from "../../../types/productTypes";
import { deleteProduct, fetchSellerProducts, updateProduct } from "../../../Redux Toolkit/Seller/sellerProductSlice";
import { Delete, Edit } from "@mui/icons-material";
import AddProductForm from "./AddProductForm";



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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ProductTable() {

  const { sellerProduct } = useAppSelector(store => store);
  const dispatch = useAppDispatch();
  const [editDialogOpen, setEditDialogOpen] = React.useState(false);
  const [editProduct, setEditProduct] = React.useState<Product | null>(null);


  React.useEffect(() => {
    dispatch(fetchSellerProducts(localStorage.getItem("jwt")))
  }, [])

  const handleEditClick = (product: Product) => {
    setEditProduct(product);
    setEditDialogOpen(true);
  };
  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setEditProduct(null);
  };
  const handleEditSubmit = (values: any) => {
    if (editProduct && editProduct._id) {
      dispatch(updateProduct({ productId: editProduct._id, product: values }));
      setEditDialogOpen(false);
      setEditProduct(null);
    }
  };
  const handleDeleteClick = (productId: number | string) => {
    if (typeof productId === 'string') {
      const numId = Number(productId);
      if (!isNaN(numId)) {
        dispatch(deleteProduct(numId));
      }
    } else {
      dispatch(deleteProduct(productId));
    }
  };

  return (
    <>
      <h1 className='pb-5 font-bold text-xl'>Products</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Images</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">MRP</StyledTableCell>
              <StyledTableCell align="right">Selling Price</StyledTableCell>
              <StyledTableCell align="right">Color</StyledTableCell>
              <StyledTableCell align="right">Update Stock</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sellerProduct.products.map((item) => (
              <StyledTableRow key={item._id}>
                <StyledTableCell component="th" scope="row">
                  <div className='flex gap-1 flex-wrap'>
                                      {item.images.map((image) => <img className='w-20 rounded-md' src={image} alt=""/>) }

                  </div>
                </StyledTableCell>
                 <StyledTableCell align="right">{item.title}</StyledTableCell>
                <StyledTableCell align="right"> ₹{item.mrpPrice}.0</StyledTableCell>
            <StyledTableCell align="right"> ₹{item.sellingPrice}.0</StyledTableCell>
                   <StyledTableCell align="right">{item.color}</StyledTableCell>
                   <StyledTableCell align="right"> <Button size='small'>in_stock</Button></StyledTableCell>
                   <StyledTableCell align="right">
                    <IconButton color='primary' className='bg-primary-color' onClick={() => handleEditClick(item)}>
                      <Edit/>
                    </IconButton>
                   </StyledTableCell>
                   <StyledTableCell align="right">
                    <IconButton color='error' onClick={() => item._id && handleDeleteClick(item._id)}>
                      <Delete/>
                    </IconButton>
                   </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={editDialogOpen} onClose={handleEditDialogClose} maxWidth="md" fullWidth>
        {editProduct && (
          <AddProductForm
            initialValues={{ ...editProduct, images: editProduct.images || [] }}
            mode="edit"
            onSubmit={handleEditSubmit}
            onClose={handleEditDialogClose}
          />
        )}
      </Dialog>
    </>

  );
}
