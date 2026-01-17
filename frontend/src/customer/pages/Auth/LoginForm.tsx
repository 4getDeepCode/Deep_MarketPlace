// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
// import { useFormik } from "formik";
// import { sendLoginSignupOtp, signin } from "../../../Redux Toolkit/Customer/AuthSlice";
// import { Button, CircularProgress, TextField } from "@mui/material";
// import OTPInput from "../../components/OtpFild/OTPInput";

// const LoginForm = () => {

//     const navigate = useNavigate();
//     const [otp, setOtp] = useState("");
//     const [timer, setTimer] = useState<number>(30); // Timer state
//     const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
//     const dispatch = useAppDispatch();
//     const { auth } = useAppSelector(store => store)

//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             otp: ''
//         },

//         onSubmit: (values: any) => {
//             // Handle form submission
//             dispatch(signin({ email: values.email, otp, navigate }))
//             console.log('Form data:', values);
//         }
//     });

//     const handleOtpChange = (otp: any) => {

//         setOtp(otp);

//     };

//     const handleResendOTP = () => {
//         // Implement OTP resend logic
//         dispatch(sendLoginSignupOtp({ email: "signing_"+formik.values.email }))
//         console.log('Resend OTP');
//         setTimer(30);
//         setIsTimerActive(true);
//     };

//     const handleSentOtp = () => {
//         handleResendOTP();
//     }

//     const handleLogin = () => {
//         formik.handleSubmit()
//     }

//     useEffect(() => {
//         let interval: number | undefined;

//         if (isTimerActive) {
//             interval = setInterval(() => {
//                 setTimer(prev => {
//                     if (prev === 1) {
//                         clearInterval(interval);
//                         setIsTimerActive(false);
//                         return 30; // Reset timer for next OTP request
//                     }
//                     return prev - 1;
//                 });
//             }, 1000);
//         }

//         return () => {
//             if (interval) clearInterval(interval);
//         };
//     }, [isTimerActive]);

//     return (
//         <div>
//             <h1 className='text-center font-bold text-xl text-primary-color pb-8'>Login</h1>
//             <form className="space-y-5">

//                 <TextField
//                     fullWidth
//                     name="email"
//                     label="Enter Your Email"
//                     value={formik.values.email}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     error={formik.touched.email && Boolean(formik.errors.email)}
//                     helperText={formik.touched.email ? formik.errors.email as string : undefined}
//                 />

//                 {auth.otpSent && <div className="space-y-2">
//                     <p className="font-medium text-sm">
//                         * Enter OTP sent to your mobile number
//                     </p>
//                     <OTPInput
//                         length={6}
//                         onChange={handleOtpChange}
//                         error={false}
//                     />
//                     <p className="text-xs space-x-2">
//                         {isTimerActive ? (
//                             <span>Resend OTP in {timer} seconds</span>
//                         ) : (
//                             <>
//                                 Didn’t receive OTP?{" "}
//                                 <span
//                                     onClick={handleResendOTP}
//                                     className="text-teal-600 cursor-pointer hover:text-teal-800 font-semibold"
//                                 >
//                                     Resend OTP
//                                 </span>
//                             </>
//                         )}
//                     </p>
//                     {formik.touched.otp && formik.errors.otp && <p>{formik.errors.otp as string}</p>}
//                 </div>}

//                 {auth.otpSent && <div>
//                     <Button disabled={auth.loading} onClick={handleLogin}
//                         fullWidth variant='contained' sx={{ py: "11px" }}>{
//                             auth.loading ? <CircularProgress  />: "Login"}</Button>
//                 </div>}

//                 {!auth.otpSent && <Button
//                 disabled={auth.loading}
//                     fullWidth
//                     variant='contained'
//                     onClick={handleSentOtp}
//                     sx={{ py: "11px" }}>{
//                         auth.loading ? <CircularProgress  />: "sent otp"}</Button>
//                 }

//             </form>

//         </div>
//     )
// }

// export default LoginForm

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { useFormik } from "formik";
import {
  sendLoginSignupOtp,
  signin,
} from "../../../Redux Toolkit/Customer/AuthSlice";
import { Button, CircularProgress, TextField } from "@mui/material";
import OTPInput from "../../components/OtpFild/OTPInput";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { auth } = useAppSelector((store) => store);
  const auth = useAppSelector((state) => state.auth);

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState<number>(30);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: () => {
      dispatch(signin({ email: formik.values.email, otp, navigate }));
    },
  });

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const handleResendOTP = () => {
    dispatch(sendLoginSignupOtp({ email: "signing_" + formik.values.email }));
    setTimer(30);
    setIsTimerActive(true);
  };

  useEffect(() => {
    let interval: number | undefined;

    if (isTimerActive) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setIsTimerActive(false);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerActive]);

  return (
    <div className="space-y-4">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Login to your account
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          We’ll send a one-time password to your email
        </p>
      </div>

      <form className="space-y-5" onSubmit={formik.handleSubmit}>
        {/* Email */}
        <TextField
          fullWidth
          name="email"
          label="Email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          sx={{ mb: 1 }}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={
            formik.touched.email ? (formik.errors.email as string) : undefined
          }
        />

        {/* OTP Section */}
        {auth.otpSent && (
          <div className="space-y-3 rounded-xl border bg-gray-50 p-4">
            <p className="text-sm font-medium text-gray-700">
              Enter the 6-digit OTP sent to your email
            </p>

            <OTPInput length={6} onChange={handleOtpChange} error={false} />

            <div className="text-xs text-gray-500">
              {isTimerActive ? (
                <span>Resend OTP in {timer}s</span>
              ) : (
                <>
                  Didn’t receive OTP?{" "}
                  <span
                    onClick={handleResendOTP}
                    className="text-indigo-600 cursor-pointer font-semibold hover:underline"
                  >
                    Resend
                  </span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Buttons */}
        {auth.otpSent ? (
          <Button
            type="submit"
            disabled={auth.loading}
            fullWidth
            variant="contained"
            sx={{
              py: "12px",
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            {auth.loading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Login"
            )}
          </Button>
        ) : (
          <Button
            disabled={auth.loading || !formik.values.email}
            onClick={handleResendOTP}
            fullWidth
            variant="contained"
            sx={{
              py: "12px",
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            {auth.loading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Send OTP"
            )}
          </Button>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
