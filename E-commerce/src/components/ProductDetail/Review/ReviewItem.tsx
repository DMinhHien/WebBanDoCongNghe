import { useState } from "react";
import { Box, Typography, Rating, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useAuth } from "../../Auth/AuthContext"; // Import AuthContext từ vị trí của bạn
interface Props {
  id: string;
  content: string;
  username: string;
  productId: string;
  rating: number;
  date: Date | string; // Allowing both Date and string types
  onEdit: (id: string) => void; // Function to handle edit action
  onDelete: (id: string) => void; // Function to handle delete action
}

const ReviewItem = ({ id, username, rating, date, content, onEdit, onDelete }: Props) => {
  const { user } = useAuth();
  // Ensure date is a valid Date object
  
  const validDate = date instanceof Date ? date : new Date(date);
  // State for menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  // Menu handlers
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box mb={3}>
      <Box display="flex" justifyContent="space-between">
      <Typography
          fontWeight="bold"
          sx={{
            color: user?.accountName === username ? "primary.main" : "inherit",
          }}
        >
          {username}
        </Typography>
        <Typography color="textSecondary">
          {isNaN(validDate.getTime()) ? "No date available" : validDate.toLocaleDateString()}
        </Typography>
        {user?.accountName === username && (
            <IconButton size="small" onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
          )}
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
    {/* Menu for Edit/Delete */}
    <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            minWidth: "120px",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            onEdit(id);
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            onDelete(id);
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ReviewItem;
