import Reviews from "./Reviews";
import InstaPosts from "./InstaPosts";
import cover from "../../../static/beautysecrets.jpg";
import { Container, Card, CardMedia, Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        my: { xs: 7.5, sm: 8 },
        p: { xs: 1, sm: 2, md: 3, lg: 4 },
        backgroundColor: "black",
      }}
    >
      <Card>
        <CardMedia
          component="img"
          src={cover}
          sx={{
            objectFit: "cover",
            maxHeight: { xs: 220, md: 380, lg: 512 },
            minHeight: { sm: 420 },
          }}
        />
      </Card>
      <Container>
        <InstaPosts />
        <Reviews />
      </Container>
    </Box>
  );
};

export default Home;
