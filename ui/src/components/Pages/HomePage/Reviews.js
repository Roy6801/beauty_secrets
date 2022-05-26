import { useState, useEffect } from "react";
import { Box, Typography, Rating } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import homeStyle from "../../../styles/homeStyle";
import google from "../../../static/google.svg";
import ReviewCard from "./ReviewCard";
import axios from "axios";

const { reviewPanel } = homeStyle;

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
    <Box
      sx={reviewPanel.container}
    >
      <Box sx={reviewPanel.title}>
        <img src={google} width="48px" />
        <div style={reviewPanel.review}>
          <Typography sx={reviewPanel.subTitle}>{avgRating}</Typography>
          <Rating
            readOnly
            precision={0.1}
            sx={reviewPanel.subTitle}
            value={Number.parseFloat(avgRating)}
          />
        </div>
      </Box>
      <Carousel
        responsive={reviewPanel.responsive}
        autoPlay
        autoPlaySpeed={15000}
        infinite
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
    </Box>
  );
};

export default Reviews;
