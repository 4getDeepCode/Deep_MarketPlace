import {
  AccountCircle,
  AddShoppingCart,
  FavoriteBorder,
  Menu,
  Search,
  Storefront,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Drawer,
  Icon,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { mainCategory } from "../../../data/Category/mainCategory";
import React, { useState } from "react";
import CategorySheet from "./CategorySheet";
import DrawerList from "./DrawerList";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import logo from "../../../assets/deep.jpeg";

const Navbar = () => {
  const [showSheet, setShowSheet] = useState(false);
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const dispatch = useAppDispatch();
  const { user, auth, cart, sellers } = useAppSelector((store) => store);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const becomeSellerClick = () => {
    if (sellers.profile?._id) {
      navigate("/seller");
    } else navigate("/become-seller");
  };

  return (
    <Box
      sx={{ zIndex: 2 }}
      className="sticky top-0 left-0 right-0 bg-white blur-bg bg-opacity-80"
    >
      <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b border-gray-200">
        <div className="flex items-center gap-9">
          <div className="flex items-center gap-2">
            {!isLarge && (
              <IconButton onClick={() => toggleDrawer(true)()}>
                <Menu className="text-gray-700" sx={{ fontSize: 29 }} />
              </IconButton>
            )}
            {/* <h1
              onClick={() => navigate("/")}
              className="logo cursor-pointer text-lg md:text-2xl  text-[#00927c]"
            >
              Deep
            </h1> */}

            <img
              src={logo}
              alt="Deep Logo"
              onClick={() => navigate("/")}
              className="h-8 md:h-10 cursor-pointer object-contain"
            />
          </div>

          {isLarge && (
            <ul className="flex items-center font-medium text-gray-800 ">
              {mainCategory.map((item) => (
                <li
                  //   onMouseLeave={() => {
                  //     setShowSheet(false);
                  //   }}
                  onMouseEnter={() => {
                    setSelectedCategory(item.categoryId);
                    setShowSheet(true);
                  }}
                  className="mainCategory hover:text-[#1E90FF] cursor-pointer hover:border-b-2 h[70px] px-4 border-[#1E90FF] flex items-center"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex gap-2 lg:gap-2 items-center">
          <IconButton onClick={() => navigate("/search-products")}>
            <Search className="text-gray-700" sx={{ fontSize: 29 }} />
          </IconButton>

          {user.user ? (
            <Button
              onClick={() => navigate("/account/orders")}
              className="flex items-center gap-2"
            >
              {/* <Avatar sx={{ width: 29, height: 29 }} src="" /> */}

              <Avatar sx={{ width: 29, height: 29, bgcolor: "#06B6D4" }}>
                {user.user?.fullName?.charAt(0)?.toUpperCase()}
              </Avatar>

              <h1 className="font-semibold hidden lg:block">
                {user.user?.fullName?.split(" ")[0]}
              </h1>
            </Button>
          ) : (
            <Button
              variant="contained"
              startIcon={<AccountCircle sx={{ fontSize: "12px" }} />}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}

          <IconButton onClick={() => navigate("/wishlist")}>
            <FavoriteBorder sx={{ fontSize: 29 }} className="text-gray-700" />
          </IconButton>

          <IconButton onClick={() => navigate("/cart")}>
            <Badge badgeContent={cart.cart?.cartItems.length} color="primary">
              <AddShoppingCart
                sx={{ fontSize: 29 }}
                className="text-gray-700"
              />
            </Badge>
          </IconButton>

          {isLarge && (
            // <Button
            //   onClick={becomeSellerClick}
            //   startIcon={<Storefront />}
            //   variant="outlined"
            // >
            //   Become Seller
            // </Button>

            <Button
              onClick={becomeSellerClick}
              startIcon={<Storefront />}
              variant="contained"
              sx={{
                backgroundColor: "#06B6D4",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              Become Seller
            </Button>
          )}
        </div>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {<DrawerList toggleDrawer={toggleDrawer} />}
      </Drawer>
      {showSheet && selectedCategory && (
        <div
          onMouseLeave={() => setShowSheet(false)}
          onMouseEnter={() => setShowSheet(true)}
          className="categorySheet absolute top-[3.41rem] left-20 right-20 "
        >
          <CategorySheet
            setShowSheet={setShowSheet}
            selectedCategory={selectedCategory}
          />
        </div>
      )}
    </Box>
  );
};

export default Navbar;
