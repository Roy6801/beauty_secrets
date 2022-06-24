import { Box } from "@mui/material";
import q3_db from "../../../static/vectors/q3_db.svg";

const Timing = () => {
  return (
    <Box className="timing-container">
      <div className="contact-vec-div">
        <img src={q3_db} className="contact-vec" />
      </div>
      <div className="timing-title">Opening Hours</div>
      <div
        className={window.innerWidth < 640 ? "time-frame xraise" : "time-frame"}
      >
        <div
          className={window.innerWidth < 640 ? "time-card xraise" : "time-card"}
        >
          <div className="time-detail">Sun - Sat</div>
          <div>10:30 am - 9 pm</div>
        </div>
      </div>
    </Box>
  );
};

export default Timing;
