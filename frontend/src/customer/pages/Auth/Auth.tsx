// import { useEffect, useState } from "react";
// import { useAppSelector } from "../../../Redux Toolkit/Store";
// import LoginForm from "./LoginForm";
// import SignupForm from "./SignupForm";
// import { Alert, Button, Snackbar } from "@mui/material";

// const Auth = () => {
//     const [isLoginPage, setIsLoginPage] = useState(true);
//     const handleCloseSnackbar = () => setSnackbarOpen(false)
//     const { auth } = useAppSelector(store => store)
//     const [snackbarOpen, setSnackbarOpen] = useState(false);

//     useEffect(() => {

//         if (auth.otpSent || auth.error) {
//             setSnackbarOpen(true);
//             console.log("store ", auth.error)
//         }

//     }, [auth.otpSent,auth.error])

//     return (
//         <div className='flex justify-center h-[90vh] items-center'>
//             <div className='max-w-md h-[85vh] rounded-md border shadow-lg '>
//                 <img className='w-full rounded-t-md' src="/login_banner.png" alt="" />
//                 <div className='mt-8 px-10'>
//                     {isLoginPage ? <LoginForm /> : <SignupForm />}

//                     <div className='flex items-center gap-1 justify-center mt-5'>
//                         <p>{isLoginPage && "Don't"} have Account ?</p>
//                         <Button onClick={() => setIsLoginPage(!isLoginPage)} size='small'>{isLoginPage ? "create account" : "login"}</Button>
//                     </div>
//                 </div>

//             </div>
//             <Snackbar
//                 anchorOrigin={{ vertical: "top", horizontal: "right" }}
//                 open={snackbarOpen} autoHideDuration={6000}
//                 onClose={handleCloseSnackbar}
//             >
//                 <Alert
//                     onClose={handleCloseSnackbar}
//                     severity={auth.error?"error":"success"}
//                     variant="filled"
//                     sx={{ width: '100%' }}
//                 >
//                     {auth.error?auth.error : " otp sent to your email!"}
//                 </Alert>
//             </Snackbar>
//         </div>
//     )
// }

// export default Auth

import { useEffect, useState } from "react";
import { useAppSelector } from "../../../Redux Toolkit/Store";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Alert, Button, Snackbar } from "@mui/material";
import loginBanner from "../../../assets/loninbanner.jpg";

const Auth = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const auth = useAppSelector((state) => state.auth);


  const handleCloseSnackbar = () => setSnackbarOpen(false);

  useEffect(() => {
    if (auth.otpSent || auth.error) {
      setSnackbarOpen(true);
    }
  }, [auth.otpSent, auth.error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/80 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative">
          <img src={loginBanner} alt="Auth banner" className="h-40 w-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-2xl font-semibold">
            {isLoginPage ? "Welcome Back 👋" : "Create Account 🚀"}
          </h2>
        </div>

        {/* Form Section */}
        <div className="px-8 py-6">
          <div className="transition-all duration-300">
            {isLoginPage ? <LoginForm /> : <SignupForm />}
          </div>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLoginPage
                ? "Don’t have an account?"
                : "Already have an account?"}
            </p>
            <Button
              onClick={() => setIsLoginPage(!isLoginPage)}
              size="small"
              sx={{
                mt: 1,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              {isLoginPage ? "Create account" : "Login"}
            </Button>
          </div>
        </div>
      </div>

      {/* Snackbar */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={auth.error ? "error" : "success"}
          variant="filled"
          sx={{
            width: "100%",
            borderRadius: "12px",
            fontWeight: 500,
          }}
        >
          {auth.error ? auth.error : "OTP sent to your email 📩"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Auth;
