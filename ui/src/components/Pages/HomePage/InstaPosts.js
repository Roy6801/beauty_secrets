import { useState, useEffect } from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import c_lb from "../../../static/vectors/c_lb.svg";
import s2_g from "../../../static/vectors/s2_g.svg";
import insta from "../../../static/insta.svg";

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const getColumns = (width) => {
  if (width < breakpoints.sm) {
    return 2;
  } else if (width < breakpoints.md) {
    return 3;
  } else if (width < breakpoints.xl) {
    return 3;
  }
};

const InstaPosts = () => {
  const { REACT_APP_INSTA_TOKEN, REACT_APP_PAGE_TOKEN } = process.env;

  const [posts, setPosts] = useState();

  const [DP, setDP] = useState();

  const [limit, setLimit] = useState(20);

  const [columns, setColumns] = useState(getColumns(window.innerWidth));

  const updateDimensions = () => {
    setColumns(getColumns(window.innerWidth));
  };

  const storageKey = "beautysecrets3110posts";

  const postAPI = `https://graph.instagram.com/me/media?fields=id,media_type,media_url&limit=${limit}&access_token=${REACT_APP_INSTA_TOKEN}`;

  const profilePicAPI = `https://graph.facebook.com/v14.0/17841407401671304?fields=profile_picture_url&access_token=${REACT_APP_PAGE_TOKEN}`;

  const childMedia = async (res) => {
    let postData = res.data.data;
    let media_id, mediaAPI;
    let media_arr = [];
    for (let key in postData) {
      let child_arr = [];
      if (postData[key]["media_type"] === "CAROUSEL_ALBUM") {
        media_id = postData[key]["id"];
        mediaAPI = `https://graph.instagram.com/${media_id}/children?fields=id,media_type,media_url&limit=${limit}&access_token=${REACT_APP_INSTA_TOKEN}`;
        const { data } = await axios.get(mediaAPI);
        const childData = data.data;
        for (let childKey in childData) {
          if (childData[childKey]["media_type"] === "IMAGE") {
            child_arr.push(childData[childKey]["media_url"]);
          }
        }
        if (child_arr.length > 0) media_arr.push(child_arr);
      } else if (postData[key]["media_type"] === "IMAGE") {
        media_arr.push([postData[key]["media_url"]]);
      }
    }

    const user_dp = (await axios.get(profilePicAPI)).data.profile_picture_url;

    window.localStorage.setItem(
      storageKey,
      JSON.stringify([
        media_arr,
        Math.round(new Date().getTime() / 1000),
        user_dp,
      ])
    );
    setPosts(media_arr);
    setDP(user_dp);
  };

  const APICall = () => {
    axios.get(postAPI).then((res) => childMedia(res));
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    let item = window.localStorage.getItem(storageKey);
    if (item) {
      let post_time = JSON.parse(item);
      let _posts = post_time[0];
      let _time = post_time[1];
      let _userDP = post_time[2];
      if (Math.round(new Date().getTime() / 1000) - _time > 10800) {
        window.localStorage.removeItem(storageKey);
        APICall();
      } else {
        setPosts(_posts);
        setDP(_userDP);
      }
    } else {
      APICall();
    }
  }, []);

  if (!posts) return null;

  return (
    <Box className="insta-container">
      <div className="insta-header">
        <div className="insta-profile">
          <img src={DP} className="insta-profile-img" />
        </div>
        <div className="insta-handle">
          <img src={insta} className="insta-logo" />
          <div className="handle-name">beautysecrets3110</div>
          <button
            className="xbtn xraise follow-button"
            onClick={(e) =>
              window.open(
                "https://www.instagram.com/beautysecrets3110/",
                "_blank"
              )
            }
          >
            Follow Us
          </button>
        </div>
      </div>
      <div className="gallery scrollbar">
        <ImageList
          variant="masonry"
          cols={columns}
          gap={columns === 3 ? 10 : 5}
        >
          {posts.map((post, index) => (
            <ImageListItem key={index} className="gallery-item xraise">
              <Carousel indicators={false} controls={false}>
                {post.map((media) => {
                  return (
                    <Carousel.Item key={media}>
                      <img src={media} style={{ width: "100%" }} />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      {window.innerWidth < 640 ? null : (
        <div className="insta-vec">
          <img src={c_lb} className="vec3" />
          <img src={s2_g} className="vec4" />
        </div>
      )}
    </Box>
  );
};

export default InstaPosts;
