import {
  Add,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Star,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import { Box, Button, Divider, Modal, Rating } from "@mui/material";
import { teal } from "@mui/material/colors";
import { useEffect, useState } from "react";
import SimilarProduct from "../SimilarProduct/SimilarProduct";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Redux Toolkit/Store";
import { useNavigate, useParams } from "react-router";
import {
  fetchProductById,
  getAllProducts,
} from "../../../../Redux Toolkit/Customer/ProductSlice";
import { fetchReviewsByProductId } from "../../../../Redux Toolkit/Customer/ReviewSlice";
import { addItemToCart } from "../../../../Redux Toolkit/Customer/CartSlice";
import ZoomableImage from "./ZoomableImage";
import ProductReviewCard from "../../Review/ProductReviewCard";
import RatingCard from "../../Review/RatingCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "100%",
  // bgcolor: 'background.paper',
  boxShadow: 24,
  outline: "none",
};

const ProductDetails = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();
  const { products, review } = useAppSelector((store) => store);
  const navigate = useNavigate();
  const { productId, categoryId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
      dispatch(fetchReviewsByProductId({ productId }));
    }
    dispatch(getAllProducts({ category: categoryId }));
  }, [productId]);

  const handleAddCart = () => {
    dispatch(
      addItemToCart({
        jwt: localStorage.getItem("jwt"),
        request: { productId, size: "FREE", quantity },
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 lg:px-24 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* IMAGE SECTION */}
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex lg:flex-col gap-3 order-2 lg:order-1">
            {products.product?.images.map((item, index) => (
              <img
                key={index}
                onClick={() => setSelectedImage(index)}
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src={item}
                alt=""
              />
            ))}
          </div>

          <div className="w-full lg:w-[85%] order-1 lg:order-2">
            <img
              onClick={handleOpen}
              src={products.product?.images[selectedImage]}
              alt=""
              className="w-full rounded-3xl shadow-xl cursor-zoom-in hover:scale-[1.02] transition"
            />
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ZoomableImage
                src={products.product?.images[selectedImage]}
                alt=""
              />
            </Box>
          </Modal>
        </section>

        {/* PRODUCT INFO */}
        <section>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 leading-snug">
            {products.product?.seller?.businessDetails?.businessName}
          </h1>

          <p className="text-xs uppercase tracking-wide text-teal-700 font-semibold">
            {products.product?.title}
          </p>

          {/* RATING */}
          <div className="flex items-center gap-3 bg-white shadow-sm rounded-xl px-4 py-2 w-fit mt-6">
            <span className="font-semibold">4.0</span>
            <Star sx={{ color: teal[500], fontSize: 18 }} />
            <Divider orientation="vertical" flexItem />
            <span className="text-sm text-gray-500">358 Ratings</span>
          </div>

          {/* PRICE */}
          <div className="space-y-2">
            <div className="price flex items-center gap-3 mt-5 text-lg">
              <span className="font-semibold text-gray-800">
                {" "}
                ₹{products.product?.sellingPrice}
              </span>
              <span className="text thin-line-through text-gray-400 ">
                ₹{products.product?.mrpPrice}
              </span>
              <span className="text-[#00927c] font-semibold">
                {products.product?.discountPercent}% off
              </span>
            </div>
            <p className="text-sm">
              Inclusive of all taxes. Free Shipping above ₹1500.
            </p>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[400] }} />
              <p>Authentic & Quality Assured</p>
            </div>

            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[400] }} />
              <p>100% money back guarantee</p>
            </div>

            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[400] }} />
              <p>Free Shipping & Returns</p>
            </div>

            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[400] }} />
              <p>Pay on delivery might be available</p>
            </div>
          </div>

          {/* QUANTITY */}
          <div className="mt-8">
            <h2 className="font-semibold mb-2">Quantity</h2>
            <div className="flex items-center justify-between w-[180px] bg-white rounded-xl shadow-sm px-3 py-2">
              <Button
                size="small"
                variant="outlined"
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>

              <span className="font-semibold text-xl">{quantity}</span>

              <Button
                size="small"
                variant="outlined"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Add />
              </Button>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-10 flex gap-4">
            <Button
              onClick={handleAddCart}
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{
                py: "1.1rem",
                fontSize: "1rem",
                background: "linear-gradient(135deg, #22D3EE 0%, #8B5CF6 100%)",
              }}
            >
              Add to Bag
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1.1rem", fontSize: "1rem" }}
            >
              Wishlist
            </Button>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-6 bg-white rounded-2xl shadow-sm p-6 text-gray-600 leading-relaxed">
            <p>{products.product?.description}</p>
          </div>

           <div className="ratings w-full mt-10">
            <h1 className="font-semibold text-lg pb-4">Review & Ratings</h1>
            <RatingCard totalReview={review.reviews.length} />
            <div className="mt-10">
              <div className="space-y-5">
                {review.reviews.map((item) => (
                  <div className="space-y-5">
                    <ProductReviewCard item={item} />
                    <Divider />
                  </div>
                ))}
                <Button onClick={() => navigate(`/reviews/${productId}`)}>
                  View All {review.reviews.length} Reviews
                </Button>
              </div>
            </div>
          </div>

        </section>
        
      </div>

      {/* SIMILAR PRODUCTS */}
      <section className="mt-28">
        <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
        <SimilarProduct />
      </section>
    </div>
  );
};

export default ProductDetails;
