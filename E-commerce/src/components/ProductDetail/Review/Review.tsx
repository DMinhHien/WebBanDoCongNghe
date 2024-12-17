import { Box, Grid, Typography } from "@mui/material";
import ReviewSummary from "./ReviewSummary";
import ReviewList from "./ReviewList";
import {Comment} from "../../../data/comment"
import { useEffect, useState } from "react";
import {fetchComments} from "../../../services/reviewService"
// const reviews = [
//   {
//     name: "Samantha87",
//     rating: 5,
//     date: "20/11/2024 12:34",
//     comment:
//       "Amazing product! My skin feels so soft and hydrated. Will definitely buy again.",
//     reply:
//       "Thank you for your kind words! We're so glad the product worked well for you.",
//   },
// ];
interface Props {
  productId: string;
}

const Reviews = ({ productId }: Props) => {
  const [reviews, setReviews] = useState<Comment[]>([]);

  useEffect(() => {
    // Fetch comments when productId changes
    fetchComments(productId).then((data) => {
      setReviews(data);
    });
  }, [productId]); // Add productId as a dependency


  return (
    <Box width="90%" margin="0 auto">
      <Typography variant="h3" fontWeight={700} mb={3}>
        Reviews
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <ReviewSummary reviews={reviews} />
        </Grid>
        <Grid item xs={12} md={8}>
          <ReviewList reviews={reviews} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Reviews;