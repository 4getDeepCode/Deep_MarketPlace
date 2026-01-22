import { useLocation, useNavigate } from "react-router";
import { useAppDispatch } from "../../../Redux Toolkit/Store";
import { performLogout } from "../../../Redux Toolkit/Customer/AuthSlice";
import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import * as React from "react";

export interface Menu {
  name: string;
  path: string;
  icon: React.ReactElement<any>;
  activeIcon: React.ReactElement<any>;
}

interface DrawerListProps {
  toggleDrawer?: any;
  menu: Menu[];
  menu2: Menu[];
}

const DrawerList = ({ toggleDrawer, menu, menu2 }: DrawerListProps) => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(performLogout());
  };

  const handleClick = (item: any) => () => {
    if (item.name === "Logout") {
      handleLogout();
    }
    navigate(item.path);
    if (toggleDrawer) toggleDrawer(false)();
  };
  return (
    <div className="h-full">
      <div className="flex flex-col  justify-between  h-full w-[300px] border-r border-gray-300 py-5">
        <div>
          <div className="space-y-2">
            {menu.map((item, _index) => (
              <div
                key={item.name}
                onClick={handleClick(item)}
                className="pr-9 cursor-pointer   "
              >
                <p
                  className={`${
                    item.path === location.pathname
                      ? "bg-primary-color text-gray-500 "
                      : "text-primary-color"
                  } flex items-center px-5 py-3 rounded-r-full`}
                >
                  {/* <ListItemIcon>
                    {location.pathname === item.path
                      ? item.activeIcon
                      : item.icon}
                  </ListItemIcon> */}

                  <ListItemIcon sx={{ minWidth: "36px" }}>
                    {React.cloneElement(
                      location.pathname === item.path
                        ? item.activeIcon
                        : item.icon,
                      {
                        sx: {
                          color:
                            location.pathname === item.path
                              ? "#6B7280" // gray-500
                              : "#06B6D4",
                          transition: "color 0.2s ease",
                        },
                      }
                    )}
                  </ListItemIcon>

                  <ListItemText primary={item.name} />
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <Divider />
          <div className="space-y-2">
            {menu2.map((item, _index) => (
              <div
                onClick={handleClick(item)}
                className="pr-9 cursor-pointer"
                key={item.name}
              >
                <p
                  className={`${
                    item.path === location.pathname
                      ? " bg-primary-color text-gray-500 "
                      : "text-primary-color"
                  } flex items-center px-5 py-3 rounded-r-full`}
                >
                  {/* <ListItemIcon>
                    {location.pathname === item.path
                      ? item.activeIcon
                      : item.icon}
                  </ListItemIcon> */}

                  <ListItemIcon sx={{ minWidth: "36px" }}>
                    {React.cloneElement(
                      location.pathname === item.path
                        ? item.activeIcon
                        : item.icon,
                      {
                        sx: {
                          color:
                            location.pathname === item.path
                              ? "#6B7280" // gray-500
                              : "#06B6D4",
                          transition: "color 0.2s ease",
                        },
                      }
                    )}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerList;
