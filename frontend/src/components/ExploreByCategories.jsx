import { useState } from "react";
import { Grid, Card, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ExploreByCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    "Technology",
    "Health",
    "Travel",
    "Food",
    "Finance",
    "Education",
    "Lifestyle",
    "Entertainment",
    "Science",
    "Sports",
    "Parenting",
    "Business",
    "Fashion",
    "Automobiles",
    "Home & DIY",
    "Environment",
    "Personal Growth",
    "Gaming",
    "History & Culture",
    "Pets",
  ];

  // Styled Category Card
  const CategoryCard = styled(Card)(({ theme }) => ({
    width: 160,
    height: 160,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: "relative",
    backgroundColor: theme.palette.grey[100],
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: theme.shadows[3],
    },
  }));

  // Styled Explore Button
  const ExploreButton = styled(Button)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: 20,
    padding: "8px 24px",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  }));

  // Handle Selection Toggle
  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div style={{ padding: "24px 0" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: "text.primary",
          mb: 4,
          px: 2,
          textAlign: "center",
        }}
      >
        Explore By Categories
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{
          px: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {categories.map((category) => (
          <Grid item key={category}>
            <CategoryCard
              onClick={() => handleCategoryClick(category)}
              sx={{
                ...(selectedCategory === category && {
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  transform: "none",
                  boxShadow: (theme) => theme.shadows[5],
                }),
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: "text.primary",
                  textAlign: "center",
                  transition: "opacity 0.3s",
                  ...(selectedCategory === category && { opacity: 0.4 }),
                }}
              >
                {category}
              </Typography>

              {selectedCategory === category && (
                <ExploreButton
                  variant="contained"
                  onMouseDown={(e) => e.stopPropagation()} // Prevent click bubbling
                  onClick={() => console.log(`Exploring ${category}`)}
                >
                  Explore
                </ExploreButton>
              )}
            </CategoryCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ExploreByCategories;
