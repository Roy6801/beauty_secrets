import { Box } from "@mui/material";
import Map from "./Map";
import q2_w from "../../../static/vectors/q2_w.svg";
import q3_w from "../../../static/vectors/q3_w.svg";

const Reach = () => {
  return (
    <Box className="reach-container">
      <div className="contact-vec-div">
        <img className="contact-vec" src={q3_w} />
      </div>
      <div className="reach-title">Reach Us</div>
      <div
        className={window.innerWidth < 640 ? "adr-frame xraise" : "adr-frame"}
      >
        <p className={window.innerWidth < 640 ? "address xraise" : "address"}>
          Shop No. - 9, Plot No. - 2, Gurusamridhi Heights, Palm Beach Rd,
          Sanpada, Navi Mumbai, Maharashtra 400705
        </p>
      </div>
      <Map />
      <div className="contact-vec-div">
        <img className="contact-vec" src={q2_w} />
      </div>
    </Box>
  );
};

export default Reach;
