import { Box } from "@mui/material";
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Elementum, commodo, quam elementum massa aliquam nulla.
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="content">
          <div className="title">Our Passion</div>
          <div className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum,
            commodo, quam elementum massa aliquam nulla.
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
              src="https://i.ytimg.com/vi/fDNc8G3RAbQ/maxresdefault.jpg"
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
