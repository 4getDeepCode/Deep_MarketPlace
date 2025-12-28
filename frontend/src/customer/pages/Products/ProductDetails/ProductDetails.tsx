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
import { Button, Divider } from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useState } from "react";
import SimilarProduct from "../SimilarProduct/SimilarProduct";

const images = [
  "https://ik.imagekit.io/4sjmoqtje/tr:w-1000,c-at_max/cdn/shop/files/green-tissue-saree-with-bead-and-cutdana-embroidery-sg338770-1.jpg?v=1757674612",
  "https://ik.imagekit.io/4sjmoqtje/tr:w-1000,c-at_max/cdn/shop/files/green-tissue-saree-with-bead-and-cutdana-embroidery-sg338770-4.jpg?v=1757674612",
  "https://ik.imagekit.io/4sjmoqtje/tr:w-1000,c-at_max/cdn/shop/files/green-tissue-saree-with-bead-and-cutdana-embroidery-sg338770-3.jpg?v=1757674612",
  "https://ik.imagekit.io/4sjmoqtje/tr:w-1000,c-at_max/cdn/shop/files/green-tissue-saree-with-bead-and-cutdana-embroidery-sg338770-6.jpg?v=1757674612",
];

const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleQuantitychange = (value) => setQuantity(quantity + value);

  return (
    <div className="min-h-screen bg-gray-50 px-4 lg:px-24 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* IMAGE SECTION */}
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex lg:flex-col gap-3 order-2 lg:order-1">
            {images.map((item, index) => (
              <img
                key={index}
                onClick={() => setCurrentImage(index)}
                src={item}
                alt=""
                className={`w-[70px] lg:w-full cursor-pointer rounded-xl border 
                  ${
                    currentImage === index
                      ? "border-teal-600 ring-2 ring-teal-200"
                      : "border-gray-200"
                  } hover:scale-105 transition`}
              />
            ))}
          </div>

          <div className="w-full lg:w-[85%] order-1 lg:order-2">
            <img
              src={images[currentImage]}
              alt=""
              className="w-full rounded-3xl shadow-xl cursor-zoom-in hover:scale-[1.02] transition"
            />
          </div>
        </section>

        {/* PRODUCT INFO */}
        <section>
          <p className="text-xs uppercase tracking-wide text-teal-700 font-semibold">
            Deep Clothing
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mt-1 leading-snug">
            Green Tissue Saree With Bead And Cutdana Embroidery
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-3 bg-white shadow-sm rounded-xl px-4 py-2 w-fit mt-6">
            <span className="font-semibold">4.0</span>
            <Star sx={{ color: teal[500], fontSize: 18 }} />
            <Divider orientation="vertical" flexItem />
            <span className="text-sm text-gray-500">358 Ratings</span>
          </div>

          {/* PRICE */}
          <div className="mt-7">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-extrabold text-gray-900">
                ₹2499
              </span>
              <span className="line-through text-gray-400 text-lg">₹3999</span>
              <span className="bg-emerald-100 text-emerald-700 text-sm px-2 py-1 rounded-lg font-semibold">
                10% OFF
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Inclusive of all taxes · Free shipping above ₹1500
            </p>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white rounded-2xl shadow-sm p-5">
            {[
              { icon: <Shield />, text: "Authentic & Quality Assured" },
              { icon: <WorkspacePremium />, text: "100% Money Back Guarantee" },
              { icon: <LocalShipping />, text: "Free Shipping & Easy Returns" },
              { icon: <Wallet />, text: "Cash on Delivery Available" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                {React.cloneElement(item.icon, { sx: { color: teal[500] } })}
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          {/* QUANTITY */}
          <div className="mt-8">
            <h2 className="font-semibold mb-2">Quantity</h2>
            <div className="flex items-center justify-between w-[180px] bg-white rounded-xl shadow-sm px-3 py-2">
              <Button
                size="small"
                variant="outlined"
                disabled={quantity === 1}
                onClick={() => handleQuantitychange(-1)}
              >
                <Remove />
              </Button>

              <span className="font-semibold text-xl">{quantity}</span>

              <Button
                size="small"
                variant="outlined"
                onClick={() => handleQuantitychange(1)}
              >
                <Add />
              </Button>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-10 flex gap-4">
            <Button
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
            Bright yet sophisticated, this green tissue saree brings a
            celebratory vibe. The border is embroidered with buttis, beads,
            cutdana, and sequins for added texture. Perfect for wedding guests
            who love elegant detail.
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
