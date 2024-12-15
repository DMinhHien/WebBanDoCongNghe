import { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    FormControlLabel,
    RadioGroup,
    Radio,
    Grid,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import useProductStore from "../../zustand/useProductStore"
  import { categories } from "../../data/products";

  const CategoryFilter = () => {
    const { filters, setCategoryFilter } = useProductStore();
    const [selectedCategory, setSelectedCategory] = useState(filters.category);
  
    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const category = event.target.value;
      setSelectedCategory(category);
      setCategoryFilter(category);
    };
  
    return (
      <Accordion
        sx={{ bgcolor: "transparent", boxShadow: "none" }}
        defaultExpanded
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight={700} fontSize={18}>
            Category
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup
            value={selectedCategory}
            onChange={handleCategoryChange}
            name="category-filter"
          >
            <Grid container>
              {categories.map((category) => (
                <Grid item xs={6} key={category}>
                  {" "}
                  {/* Mỗi phần tử chiếm 50% chiều rộng */}
                  <FormControlLabel
                    value={category}
                    control={<Radio />}
                    label={category}
                  />
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    );
  };
  
  export default CategoryFilter;