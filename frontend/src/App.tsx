import { Route, Routes, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "./Redux Toolkit/Store";
import { useEffect } from "react";
import { fetchSellerProfile } from "./Redux Toolkit/Seller/sellerSlice";
import { fetchUserProfile } from "./Redux Toolkit/Customer/UserSlice";
import {
  createHomeCategories,
  fetchHomePageData,
} from "./Redux Toolkit/Customer/Customer/AsyncThunk";
import { homeCategories } from "./data/homeCategories";
import { ThemeProvider } from "@emotion/react";
import customeTheme from "./Theme/customTheme";
import SellerDashboard from "./seller/pages/SellerDashboard/SellerDashboard";
import AdminDashboard from "./admin/pages/Dashboard/Dashboard";
import SellerAccountVerification from "./seller/pages/SellerAccountVerification";
import SellerAccountVerified from "./seller/pages/SellerAccountVerified";
import BecomeSeller from "./customer/pages/BecomeSeller/BecomeSeller";
import AdminAuth from "./admin/pages/Auth/AdminAuth";
import CustomerRoutes from "./routes/CustomerRoutes";

function App() {
  const dispatch = useAppDispatch();
  const {sellers, user } = useAppSelector((store) => store);
  const navigate = useNavigate();



  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) return;

    dispatch(fetchUserProfile({ jwt, navigate }));
    dispatch(fetchSellerProfile(jwt));
  }, []);

  useEffect(() => {
    dispatch(createHomeCategories(homeCategories));
    dispatch(fetchHomePageData());
  }, [dispatch]);

  return (
    <ThemeProvider theme={customeTheme}>
      <div className="App">
        <Routes>
          {sellers.profile && (
            <Route path="/seller/*" element={<SellerDashboard />} />
          )}
          {user.user?.role === "ROLE_ADMIN" && (
            <Route path="/admin/*" element={<AdminDashboard />} />
          )}
          <Route
            path="/verify-seller/:otp"
            element={<SellerAccountVerification />}
          />
          <Route
            path="/seller-account-verified"
            element={<SellerAccountVerified />}
          />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/admin-login" element={<AdminAuth />} />
          <Route path="*" element={<CustomerRoutes />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
