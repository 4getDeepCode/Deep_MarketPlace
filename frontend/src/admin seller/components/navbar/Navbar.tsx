// import { Drawer, IconButton  } from '@mui/material'
// import MenuIcon from '@mui/icons-material/Menu';

// import { useNavigate } from 'react-router';
// import React from 'react';



// const Navbar = ({DrawerList}:any) => {
//  const navigate = useNavigate()
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (newOpen: any)=>() => {
//     setOpen(newOpen);
    
//   };

//   return (
//     <div className='h-[10vh] flex items-center px-5 border-b'>
//       <div className='flex items-center gap-3 '>
//         <IconButton onClick={toggleDrawer(true)} color='primary'>
//           <MenuIcon color='primary' />
//         </IconButton>

//         <h1 onClick={() => navigate("/")} className='logo text-xl cursor-pointer'>Deep</h1>
//       </div>

//       <Drawer open={open} onClose={toggleDrawer(false)}>
//         <DrawerList toggleDrawer={toggleDrawer} />
//       </Drawer>

//     </div>
//   )
// }

// export default Navbar


import React from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

const Navbar = ({ DrawerList }: any) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 h-[10vh]">
        <div className="flex h-full items-center justify-between border-b border-gray-300 bg-white/80 backdrop-blur-xl px-5 shadow-sm">
          {/* Left */}
          <div className="flex items-center gap-3">
            <IconButton
              onClick={toggleDrawer(true)}
              className="transition hover:bg-primary-color/10"
              color="primary"
            >
              <MenuIcon  />
            </IconButton>

            <h1
              onClick={() => navigate("/")}
              className="logo cursor-pointer text-xl font-semibold tracking-wide text-primary-color hover:opacity-80 transition"
            >
              Deep
            </h1>
          </div>

          {/* Right (future-ready) */}
          <div className="flex items-center gap-3">
            {/* Add profile / notifications here later */}
          </div>
        </div>
      </header>

      {/* Drawer */}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          className:
            "w-[300px] border-none bg-white/90 backdrop-blur-xl shadow-xl",
        }}
      >
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};

export default Navbar;
