import { Box } from "@mui/material";
import { Carousel } from "react-bootstrap";
import natural from "../../../static/natural.jpg";
import pastel from "../../../static/pastel.jpg";
import bridal from "../../../static/bridal.jpg";

const Display = () => {
  const items = {
    "From Natural Colors...": natural,
    "...to Pastel Colors": pastel,
    "...and Bridal Makeovers too!": bridal,
  };

  return (
    <Box className="display-container">
      {window.innerWidth < 640 ? (
        <Carousel className="carousel-style" controls={false}>
          {Object.keys(items).map((caption, index) => {
            return (
              <Carousel.Item key={index}>
                <div className="display-img-frame">
                  <div className="display-img-card xraise">
                    <img src={items[caption]} className="display-img-pic" />
                  </div>
                </div>
                <Carousel.Caption className="display-caption">
                  {caption}
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      ) : (
        <Carousel className="carousel-style" pause={false} controls={false}>
          {Object.keys(items).map((caption, index) => {
            return (
              <Carousel.Item interval={5000} key={index}>
                <div className="display-item">
                  <div className="display-caption">{caption}</div>
                  <div className="display-img-frame xraise">
                    <div className="display-img-card xraise">
                      <img src={items[caption]} className="display-img-pic" />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </Box>
  );
};

export default Display;
