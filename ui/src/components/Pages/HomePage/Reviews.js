import { useState, useEffect } from "react";
import { Box, Rating } from "@mui/material";
import { StarRounded, StarBorderRounded } from "@mui/icons-material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import google from "../../../static/google.svg";
import s3_g from "../../../static/vectors/s3_g.svg";
import ReviewCard from "./ReviewCard";
import axios from "axios";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { REACT_APP_REVIEW_API, REACT_APP_API_KEY } = process.env;
  const storageKey = "beautysecrets3110reviews";

  const API_ENDPOINT = `${REACT_APP_REVIEW_API}/${REACT_APP_API_KEY}`;

  const APICall = () => {
    axios.get(API_ENDPOINT).then((res) => {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify([res.data, Math.round(new Date().getTime() / 1000)])
      );
      setReviews(res.data);
    });
  };

  useEffect(() => {
    let item = window.localStorage.getItem(storageKey);
    if (item) {
      let rev_time = JSON.parse(item);
      let _reviews = rev_time[0];
      let _time = rev_time[1];

      if (Math.round(new Date().getTime() / 1000) - _time > 10800) {
        window.localStorage.removeItem(storageKey);
        APICall();
      } else {
        setReviews(_reviews);
      }
    } else {
      APICall();
    }
  }, []);

  if (!reviews) return null;

  const { avgRating, userReviews } = reviews;

  return (
    <Box className="review-container">
      {window.innerWidth < 640 ? (
        <div className="google-logo-frame xraise">
          <div className="google-logo xraise">
            <img src={google} className="logo-vec" />
            <div className="review-design">
              <img src={s3_g} />
              <div className="google-reviews">Reviews</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="google-logo">
          <img src={google} className="logo-vec" />
          <div className="google-reviews">Reviews</div>
        </div>
      )}
      <div className="review-header">
        <div className="avg-rating">
          <div className="rating-score">{avgRating}</div>

          <Rating
            readOnly
            precision={0.1}
            value={Number.parseFloat(avgRating)}
            icon={
              <StarRounded
                style={{ width: "48px", height: "48px", color: "#ffc107" }}
              />
            }
            emptyIcon={
              <StarBorderRounded style={{ width: "48px", height: "48px" }} />
            }
          />
        </div>
        {window.innerWidth < 640 ? null : (
          <button className="xbtn xraise review-button">Leave a Review</button>
        )}
      </div>

      <div className="multi-carousel">
        <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={5000}
          infinite
          arrows={false}
        >
          {Object.keys(userReviews).map((key, index) => {
            const [name, rating, review] = userReviews[key];

            return (
              <ReviewCard
                key={index}
                profileURL={key}
                userName={name}
                userRating={rating}
                userReview={review}
              />
            );
          })}
        </Carousel>
      </div>

      <div className="review-btn-div" >
        {window.innerWidth < 640 ? (
          <button className="xbtn xraise review-button">Leave a Review</button>
        ) : null}
      </div>
    </Box>
  );
};

export default Reviews;
