import Reviews from "./Reviews";
import InstaPosts from "./InstaPosts";
import cover from "../../../static/beautysecrets.jpg";
import { Typography, Card, CardMedia, Box } from "@mui/material";
import homeStyle from "../../../styles/homeStyle";
import "../../../index.css";

const { homeContainer, titleCard } = homeStyle;

const Home = () => {
  return (
    <Box sx={homeContainer} >
      <Card sx={titleCard.container}>
        <CardMedia component="img" src={cover} sx={titleCard.image} />
        <div style={titleCard.centered}>
          <Typography sx={titleCard.title}>Beauty Secrets</Typography>
          <Typography sx={titleCard.subTitle}>Family Salon</Typography>
        </div>
      </Card>
      <InstaPosts />
      <Reviews />
    </Box>
  );
};

export default Home;
