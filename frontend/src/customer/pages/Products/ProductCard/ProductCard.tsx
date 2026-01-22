import { useEffect, useState } from "react";
import * as React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

import { Product } from "../../../../types/productTypes";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Redux Toolkit/Store";
import { addProductToWishlist } from "../../../../Redux Toolkit/Customer/WishlistSlice";
import { isWishlisted } from "../../../../util/isWishlisted";
import { Favorite, FavoriteBorder, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import { Box, Button, Modal } from "@mui/material";
import ChatBot from "../../ChatBot/ChatBot";

interface ProductCardProps {
  item: Product;
  categoryId?: string;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  borderRadius: ".5rem",
  boxShadow: 24,
};

const ProductCard: React.FC<ProductCardProps> = ({ item, categoryId }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);

  const { wishlist } = useAppSelector((store) => store);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddWishlist = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (item._id) {
      dispatch(addProductToWishlist({ productId: item._id }));
    }
  };

  useEffect(() => {
    if (!isHovered || !item.images?.length) return;

    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % item.images.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isHovered, item.images]);

  const handleShowChatBot = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowChatBot(true);
  };

  const handleCloseChatBot = () => {
    setShowChatBot(false);
  };

  return (
    <>
      <div
        onClick={() =>
          navigate(
            `/product-details/${categoryId}/${encodeURIComponent(item.title)}/${
              item._id
            }`,
          )
        }
        className="group relative rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-lg"
      >
        {/* Image */}
        <div
          className="relative h-[260px] w-full overflow-hidden rounded-lg bg-gray-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {item.images?.map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              alt={`product-${index}`}
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500"
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}

          {isHovered && (
            <div className="indicator flex flex-col items-center space-y-2">
              <div className="flex gap-4">
                {item.images?.map((_: any, index: any) => (
                  <button
                    key={index}
                    className={`indicator-button ${
                      index === currentImage ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(index);
                    }}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                {wishlist.wishlist && (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleAddWishlist}
                  >
                    {isWishlisted(wishlist.wishlist, item) ? (
                      <Favorite sx={{ color: teal[500] }} />
                    ) : (
                      <FavoriteBorder sx={{ color: "gray" }} />
                    )}
                  </Button>
                )}

                <Button
                  onClick={handleShowChatBot}
                  color="secondary"
                  variant="contained"
                >
                  <ModeComment sx={{ color: teal[500] }} />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="pt-3 space-y-1">
          <h1 className="text-sm font-semibold text-gray-800 truncate">
            {item.seller?.businessDetails?.businessName}
          </h1>

          <p className="text-sm text-gray-600 truncate">{item.title}</p>

          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-gray-900">
              ₹{item.sellingPrice}
            </span>
            <span className="text-gray-400 line-through">₹{item.mrpPrice}</span>
            <span className="font-semibold text-emerald-600">
              {item.discountPercent}% off
            </span>
          </div>
        </div>
      </div>

      {showChatBot && (
        <section className="absolute left-16 top-0">
          <Modal
            open={true}
            onClose={handleCloseChatBot}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ChatBot handleClose={handleCloseChatBot} productId={item._id} />
            </Box>
          </Modal>
        </section>
      )}
    </>
  );
};

export default ProductCard;
