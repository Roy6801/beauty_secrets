import { Box, Rating } from "@mui/material";
import { StarRounded, StarBorderRounded } from "@mui/icons-material";

const ReviewCard = ({ profileURL, userName, userReview, userRating }) => {
  return (
    <Box className="review-card">
      <div className="xcard-header">
        <div className="xcard-avatar">
          <img src={profileURL} className="xcard-avatar-img" />
        </div>
        <div className="reviewer">
          <div className="xcard-name">{userName}</div>
          <div>
            <Rating
              readOnly
              precision={0.1}
              value={Number.parseFloat(userRating)}
              icon={
                <StarRounded
                  style={{ width: "24px", height: "24px", color: "#ffc107" }}
                />
              }
              emptyIcon={
                <StarBorderRounded style={{ width: "24px", height: "24px" }} />
              }
            />
          </div>
        </div>
      </div>
      <div className="xcard-body scrollbar">{userReview}</div>
    </Box>
  );
};

export default ReviewCard;
