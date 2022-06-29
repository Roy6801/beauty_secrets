import { Box } from "@mui/material";
import q1_w from "../../../static/vectors/q1_w.svg";
import q2_w from "../../../static/vectors/q2_w.svg";
import q3_w from "../../../static/vectors/q3_w.svg";

const Provide = () => {
  return (
    <Box className="provide-container">
      <div className="tagline">We bring out your BEST!</div>
      <div className="provide-vec1-div">
        <img
          src={window.innerWidth < 640 ? q2_w : q1_w}
          className="provide-vec"
        />
      </div>
      {window.innerWidth < 640 ? (
        <div className="provide-vec2-div">
          <img src={q3_w} className="provide-vec" />
        </div>
      ) : null}
      <div className="other-services">We also provide...</div>
      <div className="provide-list1">
        <ul>
          <li>Manicure & Pedicure</li>
          <li>Nail Art</li>
          <li>Facial Treatments</li>
          <li>Skin Care Treatments </li>
        </ul>
      </div>
      <div className="provide-list2">
        <ul>
          <li>Regular/Chocolate & Rica Waxing</li>
          <li>Body Polishing</li>
          <li>Body Spa for Women</li>
        </ul>
      </div>
    </Box>
  );
};

export default Provide;
