import { useState } from "react";
import { Box, Grid } from "@mui/material";

import img from "../../../assets/iphone.jpeg"

const MainImage = () => {
    return (
    <Box sx={{ width: "85%", margin: "0 auto" }}>
    {/* Main Image Display */}
    <Box
      component="img"
      src={img}
      alt="Selected Product"
      sx={{
        width: "100%",
        aspectRatio: 1,
        objectFit: "cover",
        borderRadius: 5,
        boxShadow: 3,
      }}
    />
  </Box>
);
};
export default MainImage;