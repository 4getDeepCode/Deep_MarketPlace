import { Menu } from "@mui/icons-material";
import { Drawer, IconButton } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router";
import logo from "../../../assets/deep.jpeg";

const Navbar = ({ DrawerList }: any) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: any) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="h-[10vh] flex items-center px-5 border-b border-gray-300">
      <div className="flex items-center gap-3 ">
        <IconButton onClick={toggleDrawer(true)} color="primary">
          <Menu color="primary" />
        </IconButton>

        {/* <h1 onClick={() => navigate("/")} className='logo text-xl cursor-pointer'>Deep</h1> */}

        <img
          src={logo}
          alt="Deep Logo"
          onClick={() => navigate("/")}
          className="h-8 md:h-10 cursor-pointer object-contain"
        />
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default Navbar;
