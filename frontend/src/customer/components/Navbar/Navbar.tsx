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
const Navbar = () => {
  const [showSheet, setShowSheet] = useState(false);
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
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
              <IconButton>
                <Menu className="text-gray-700" sx={{ fontSize: 29 }} />
              </IconButton>
            )}
            <h1 onClick={() => navigate("/")} className="logo cursor-pointer text-lg md:text-2xl  text-[#00927c]">
              Deep
            </h1>
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
                  className="mainCategory hover:text-[#00927c] cursor-pointer hover:border-b-2 h[70px] px-4 border-[#00927c] flex items-center"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex gap-1 lg:gap-1 items-center">
          <IconButton>
            <Search className="text-gray-700" sx={{ fontSize: 29 }} />
          </IconButton>

         {false? <Button
            onClick={() => navigate("/account")}
            className="flex items-center gap-2"
          >
            <Avatar
              sx={{ width: 29, height: 29 }}
              src="https://media.licdn.com/dms/image/v2/D4D03AQEm6Is_bY4wbg/profile-displayphoto-scale_200_200/B4DZmGaA94JEAY-/0/1758896592916?e=1769040000&v=beta&t=lla1PHhNeP_OHaC1KskFycZbWoqEsWTA-_L1gH84wIE"
            />
            <h1 className="font-semibold hidden lg:block">Deep</h1>
          </Button>
            :
          <Button
            variant="contained"
            startIcon={<AccountCircle sx={{ fontSize: "12px" }} />}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          }

          <IconButton onClick={() => navigate("/wishlist")}>
            <FavoriteBorder sx={{ fontSize: 29 }} className="text-gray-700" />
          </IconButton>

          <IconButton onClick={() => navigate("/cart")}>
            <Badge color="primary">
              <AddShoppingCart

                sx={{ fontSize: 29 }}
                className="text-gray-700"
              />
            </Badge>
          </IconButton>

          {isLarge && (
            <Button startIcon={<Storefront />} variant="outlined">
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
          className="categorySheet absolute top-[4.41rem] left-20 right-20 "
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
