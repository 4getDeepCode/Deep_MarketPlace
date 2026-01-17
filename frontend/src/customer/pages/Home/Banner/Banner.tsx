// import { useEffect, useState } from "react";
// import { banners } from "../../../../data/banner";
// import { Box, MobileStepper } from "@mui/material";

// const Banner = () => {
//   const [activeStep, setActiveStep] = useState<number>(0);
//   const maxSteps = banners.length;

//   // Auto change slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % maxSteps);
//     }, 3000); // 3 seconds

//     return () => clearInterval(timer);
//   }, [maxSteps]);

//   return (
//     <Box sx={{ width: "100%", position: "relative" }}>
//       <Box
//         component="img"
//         src={banners[activeStep]}
//         alt="banner"
//         sx={{
//           width: "100%",
//           height: { xs: 200, md: 400 },
//           objectFit: "cover",
//           transition: "opacity 0.5s ease-in-out",
//         }}
//       />

//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={null}
//         backButton={null}
//         sx={{
//           position: "absolute",
//           bottom: 10,
//           left: "50%",
//           transform: "translateX(-50%)",
//           background: "transparent",
//         }}
//       />
//     </Box>
//   );
// };

// export default Banner;



import { useEffect, useState } from "react";
import { Box, MobileStepper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { banners } from "../../../../data/banner";

type ItemProps = {
  categoryId?: string | number;
};

const Banner = ({ categoryId }: ItemProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const maxSteps = banners.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % maxSteps);
    }, 3000);

    return () => clearInterval(timer);
  }, [maxSteps]);

  // const handleBannerClick = () => {
  //   navigate(banners[activeStep].link);
  // };

  const handleNavigate = () => {
    if (!categoryId) return;
    navigate(`/products/${categoryId}`);
  };
  return (
    <Box sx={{ width: "100%", position: "relative", cursor: "pointer" }}>
      <Box
        component="img"
        src={banners[activeStep]}
        alt="banner"
        onClick={handleNavigate}
        sx={{
          width: "100%",
          height: { xs: 200, md: 300},
          objectFit: "cover",
        }}
      />

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={null}
        backButton={null}
        sx={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          background: "transparent",
        }}
      />
    </Box>
  );
};

export default Banner;
