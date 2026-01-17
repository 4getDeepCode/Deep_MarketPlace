import { Backdrop, Button, CircularProgress } from "@mui/material";
import DealSlider from "./Deal/DealSlider";
import ElectronicCategory from "./ElectronicCategory/ElectronicCategory";
import Grid from "./Grid/Grid";
import HomeCategory from "./HomeCategory/HomeCategory";
import StoreIcon from "@mui/icons-material/Store";
import { useState } from "react";
import { useAppSelector } from "../../../Redux Toolkit/Store";
import { useNavigate } from "react-router";
import ChatBot from "../ChatBot/ChatBot";
import { ChatBubble } from "@mui/icons-material";
import Banner from "./Banner/Banner";

const Home = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const { homePage } = useAppSelector((store) => store);
  const navigate = useNavigate();

  const handleShowChatBot = () => {
    setShowChatBot(!showChatBot);
  };
  const handleCloseChatBot = () => {
    setShowChatBot(false);
  };
  const becomeSellerClick = () => {
    navigate("/become-seller");
  };
  return (
    <>
      {!homePage.loading ? (
        <div className="space-y-5">
          {homePage.homePageData?.electricCategories && <ElectronicCategory />}
          {homePage && <Banner/>}

          {homePage.homePageData?.grid && (
            <section>
              <Grid />
            </section>
          )}

          {homePage.homePageData?.deals && (
            <section>
              <h1 className="text-3xl font-bold text-center mb-10 text-[#1E90FF]">
                Today's Deals
              </h1>
              <DealSlider />
            </section>
          )}

          {homePage.homePageData?.shopByCategories && (
            <section>
              <h1 className="text-3xl font-bold text-center mb-10 text-[#1E90FF]">
                Shop By Category
              </h1>
              <HomeCategory />
            </section>
          )}

          <section className="relative h-[220px] sm:h-[300px] lg:h-[450px] overflow-hidden mt-10">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://media.istockphoto.com/id/1344928463/vector/hand-holding-mobile-smart-phone-with-shopp-app-online-shopping-concept.jpg?s=612x612&w=0&k=20&c=hzkpZejHuLTWPErJ-PeAd_Sj7s2kLb_Jqi5ZbyzKsDE="
              alt=""
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            <div className="relative z-10 flex h-full items-center">
              <div className="px-4 sm:px-10 lg:px-20 max-w-2xl space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight">
                  Sell Your Products Online
                </h1>

                <p className="text-base sm:text-lg lg:text-2xl text-gray-200">
                  Grow your business with
                  <span className=" pl-2 text-3xl text-white font-extrabold">
                    Deep MarketPlace
                  </span>
                </p>

                <div className="pt-4">
                  <Button
                    onClick={becomeSellerClick}
                    startIcon={<StoreIcon />}
                    variant="contained"
                    className=" !rounded-full !bg-white !text-indigo-600 !px-6 !py-3 !text-base !font-semibold !shadow-md hover:!bg-indigo-50 hover:!shadow-lg active:!scale-95 transition-all duration-300 "
                  >
                    Become a Seller
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="fixed bottom-10 right-10">
            {showChatBot ? (
              <ChatBot handleClose={handleCloseChatBot} />
            ) : (
              <Button
                onClick={handleShowChatBot}
                sx={{ borderRadius: "2rem" }}
                variant="contained"
                className="h-16 w-16  flex justify-center items-center rounded-full"
              >
                <ChatBubble sx={{ color: "white", fontSize: "2rem" }} />
              </Button>
            )}
          </section>
        </div>
      ) : (
        <Backdrop open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default Home;
