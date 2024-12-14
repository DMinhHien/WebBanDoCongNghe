import { Box, Typography, Rating } from "@mui/material";

interface Props {
  name: string;
  rating: number;
  date: string;
  comment: string;
  reply?: string;
}

const ReviewItem = ({ name, rating, date, comment, reply }: Props) => {
    return (
      <Box mb={3}>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight="bold">{name}</Typography>
          <Typography color="textSecondary">{date}</Typography>
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
        <Typography sx={{ mt: 1 }}>{comment}</Typography>
        {reply && (
          <Typography
            sx={{ mt: 1, pl: 5, color: "secondary.main", fontStyle: "italic" }}
          >
            {reply}
          </Typography>
        )}
      </Box>
    );
  };
  
  export default ReviewItem;