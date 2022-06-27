import { Box } from "@mui/material";
import Display from "./Display";
import Provide from "./Provide";
import art from "../../../static/art.jpg";
import q1_w from "../../../static/vectors/q1_w.svg";
import q2_w from "../../../static/vectors/q2_w.svg";
import q3_w from "../../../static/vectors/q3_w.svg";
import q4_w from "../../../static/vectors/q4_w.svg";

const Services = () => {
  return (
    <Box className="services-container">
      <img src={art} className="services-cover-img" />
      <div className="services-cover">
        {window.innerWidth < 640 ? (
          <div>
            <img src={q4_w} className="services-vec1" />
          </div>
        ) : null}
        <div className="artistic">Our Artistic</div>
        <div className="touch">Touch</div>
        {window.innerWidth < 640 ? (
          <div className="services-vec2-div">
            <img src={q2_w} className="services-vec2" />
          </div>
        ) : (
          <div className="services-vec3-div">
            <img src={q3_w} className="services-vec2" />
          </div>
        )}
      </div>
      {window.innerWidth < 640 ? (
        <div className="services-vec3-div">
          <img src={q3_w} className="services-vec2" />
        </div>
      ) : null}
      <Display />
      <Provide />
    </Box>
  );
};

export default Services;
