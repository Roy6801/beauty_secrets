import { useState, useEffect } from "react";
import axios from "axios";
import { ImageList, ImageListItem } from "@mui/material";
import { Carousel } from "react-bootstrap";

const InstaPosts = () => {
  const { REACT_APP_INSTA_TOKEN } = process.env;

  const [posts, setPosts] = useState();

  const [limit, setLimit] = useState(20);

  const storageKey = "beautysecrets3110posts";

  const postAPI = `https://graph.instagram.com/me/media?fields=id,media_type,media_url&limit=${limit}&access_token=${REACT_APP_INSTA_TOKEN}`;

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
    window.localStorage.setItem(
      storageKey,
      JSON.stringify([media_arr, Math.round(new Date().getTime() / 1000)])
    );
    setPosts(media_arr);
  };

  const APICall = () => {
    axios.get(postAPI).then((res) => childMedia(res));
  };

  useEffect(() => {
    let item = window.localStorage.getItem(storageKey);
    if (item) {
      let post_time = JSON.parse(item);
      let _posts = post_time[0];
      let _time = post_time[1];
      if (Math.round(new Date().getTime() / 1000) - _time > 10800) {
        window.localStorage.removeItem(storageKey);
        APICall();
      } else {
        setPosts(_posts);
      }
    } else {
      APICall();
    }
  }, []);

  if (!posts) return null;

  return (
    <ImageList
      variant="masonry"
      cols={4}
      sx={{ backgroundColor: "red", m: 2, p: 2 }}
    >
      {posts.map((post, index) => (
        <ImageListItem key={index}>
          <Carousel>
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
  );
};

export default InstaPosts;
