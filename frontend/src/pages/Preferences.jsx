import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/company_logo.png"; // Import background image

const PreferencesPage = () => {
  const [categories] = useState([
    "Technology",
    "Health",
    "Travel",
    "Food",
    "Finance",
    "Education",
    "Lifestyle",
  ]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const handleToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = () => {
    alert(`Preferences Saved: ${selectedCategories.join(", ")}`);
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#000", // Black background
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          width: "90%",
          maxWidth: 500,
          borderRadius: 3,
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            borderRadius: 2,
            padding: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#000",
              textAlign: "center",
              marginBottom: 2,
            }}
          >
            Select Your Preferences
          </Typography>

          {/* Properly aligned checkbox list */}
          <Grid container spacing={1} sx={{ justifyContent: "center" }}>
            {categories.map((category) => (
              <Grid item xs={12} key={category}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleToggle(category)}
                    />
                  }
                  label={category}
                  sx={{
                    width: "100%", // Ensures labels align properly
                    color: "#000", // Black text
                    "& .MuiCheckbox-root": { color: "#000" }, // Checkbox color
                  }}
                />
              </Grid>
            ))}
          </Grid>

          <Button
            variant="contained"
            color="default"
            onClick={handleSubmit}
            sx={{
              display: "block",
              margin: "20px auto",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Save Preferences
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default PreferencesPage;
