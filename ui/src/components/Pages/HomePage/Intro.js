import { Box } from "@mui/material";
import profile from "../../../static/profile.jpg";
import q4_rb from "../../../static/vectors/q4_rb.svg";
import s2_db from "../../../static/vectors/s2_db.svg";
import s3_rb from "../../../static/vectors/s3_rb.svg";

const Intro = () => {
  const Passion = () => {
    if (window.innerWidth < 640) {
      return (
        <div className="content">
          <div className="title">Our Passion</div>
          <div className="content-frame xraise">
            <div className="sub-title xraise">
              Hair is our passion, and our passion shows on every client that
              walks out of our doors. Through ongoing education, our stylists
              stay up to date on the latest cut and color styles and techniques
              to bring you the looks you want.
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="content">
          <div className="title">Our Passion</div>
          <div className="sub-title">
            Hair is our passion, and our passion shows on every client that
            walks out of our doors. Through ongoing education, our stylists stay
            up to date on the latest cut and color styles and techniques to
            bring you the looks you want.
          </div>
        </div>
      );
    }
  };

  return (
    <Box className="frame-container">
      <img src={window.innerWidth < 640 ? s3_rb : q4_rb} className="vec1" />
      {window.innerWidth < 640 ? null : <img src={s2_db} className="vec2" />}

      <div className="pic-frame">
        <div className="display-frame1 xraise">
          <div className="display-frame2 xraise">
            <img
              src={profile}
              className="display-img"
            />
          </div>
        </div>
      </div>

      <Passion />
    </Box>
  );
};

export default Intro;
