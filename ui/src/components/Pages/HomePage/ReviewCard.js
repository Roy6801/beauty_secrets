import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Rating,
} from "@mui/material";
import homeStyle from "../../../styles/homeStyle";
import "../../../index.css";

const { reviewCard } = homeStyle.reviewPanel;

const ReviewCard = ({ profileURL, userName, userReview, userRating }) => {
  return (
    <Card sx={reviewCard.card}>
      <CardHeader
        sx={{
          height: 100,
          m: 1,
        }}
        avatar={<Avatar src={profileURL} alt={userName} />}
        title={<Typography fontWeight="bold">{userName}</Typography>}
        subheader={
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Rating
              readOnly
              precision={0.1}
              value={Number.parseFloat(userRating)}
            />
          </CardContent>
        }
      />
      <CardContent sx={{ height: 100, mx: 2 }} className="scrollbar">
        <Typography variant="body2" textAlign="justify">
          {userReview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
