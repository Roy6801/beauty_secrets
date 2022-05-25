import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import { Box, Typography, Rating, Icon } from "@mui/material";
import { Google } from "@mui/icons-material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { REACT_APP_REVIEW_API, REACT_APP_API_KEY } = process.env;
  const storageKey = "beautysecrets3110reviews";

  const API_ENDPOINT = `${REACT_APP_REVIEW_API}/${REACT_APP_API_KEY}`

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
      sx={{
        display: "flex",
        flexDirection: "column",
        m: { md: 5 },
        p: { md: 5 },
        backgroundColor: "aqua",
      }}
    >
      <Box
        sx={{
          display: "flex",
          backgroundColor: "red",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Icon>
            <Google />
          </Icon>
          <Typography sx={{ backgroundColor: "white", m: 5 }}>
            Google Ratings
          </Typography>
        </div>
        <Typography sx={{ backgroundColor: "white", m: 5 }}>
          What our customers say...
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ backgroundColor: "white", m: 5 }}>
            {avgRating}
          </Typography>
          <Rating
            readOnly
            precision={0.1}
            value={Number.parseFloat(avgRating)}
          />
        </div>
      </Box>
      <Carousel responsive={responsive} autoPlay autoPlaySpeed={15000} infinite>
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
