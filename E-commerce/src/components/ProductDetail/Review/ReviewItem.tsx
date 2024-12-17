import { Box, Typography, Rating } from "@mui/material";

interface Props {
  id: string;
  content: string;
  username: string;
  productId: string;
  rating: number;
  date: Date | string; // Allowing both Date and string types
}

const ReviewItem = ({ username, rating, date, content }: Props) => {
  // Ensure date is a valid Date object
  const validDate = date instanceof Date ? date : new Date(date);

  return (
    <Box mb={3}>
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight="bold">{username}</Typography>
        <Typography color="textSecondary">
          {isNaN(validDate.getTime()) ? "No date available" : validDate.toLocaleDateString()}
        </Typography>
      </Box>
      <Rating
        value={rating}
        readOnly
        size="small"
        sx={{
          "& .MuiRating-iconFilled": {
            color: "black",
          },
          "& .MuiRating-iconEmpty": {
            color: "black",
          },
        }}
      />
      <Typography sx={{ mt: 1 }}>{content}</Typography>
    </Box>
  );
};

export default ReviewItem;
