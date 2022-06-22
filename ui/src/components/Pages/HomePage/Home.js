import Intro from "./Intro";
import InstaPosts from "./InstaPosts";
import Reviews from "./Reviews";
import cover from "../../../static/beautysecrets.jpg";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box className="the-home">
      <img src={cover} className="cover-img" />
      <div className="cover">
        <div className="cover-title">{"Spreading Love"}</div>
        <div className="cover-sub-title">{"through Hair & Beauty"}</div>
        <button
          className="xbtn book-button xraise"
          onClick={(e) => {
            if (window.innerWidth < 640) {
              window.open("https://wa.me/919920395135", "_blank");
            } else {
              window.open(
                "https://www.instagram.com/beautysecrets3110/",
                "_blank"
              );
            }
          }}
        >
          Book Appointment
        </button>
      </div>
      <Intro />
      <InstaPosts />
      <Reviews />
    </Box>
  );
};

export default Home;
