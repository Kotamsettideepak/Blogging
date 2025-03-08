import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

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

const CreateBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");
  const [banner, setBanner] = useState(null);
  const [readingTime, setReadingTime] = useState(0);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);

  // Function to calculate Read Time based on 200 WPM
  useEffect(() => {
    const words = content.trim().split(/\s+/).length;
    const readTime = Math.ceil(words / 200);
    setReadingTime(readTime || 0);
  }, [content]);

  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handlePreview = () => {
    if (!title || !content || !selectedCategory) {
      alert("Please fill in all required fields!");
      return;
    }
    setPreviewOpen(true);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {!selectedCategory ? (
        <Card sx={{ p: 4, textAlign: "center", boxShadow: 3, borderRadius: 3 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              background: "linear-gradient(45deg, #FF6F61, #FF8E53)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Select a Blog Category
          </Typography>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Select Category</InputLabel>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              displayEmpty
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              width: "50%",
              backgroundColor: "#FF6F61",
              "&:hover": { backgroundColor: "#E65C55" },
            }}
            onClick={() => {
              if (!selectedCategory) alert("Please select a category");
            }}
          >
            Start Writing
          </Button>
        </Card>
      ) : (
        <Card sx={{ p: 4, boxShadow: 3, borderRadius: 3 }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Tooltip title="Go Back">
                <IconButton
                  onClick={() => setSelectedCategory("")}
                  sx={{ color: "primary.main" }}
                >
                  <ArrowBackIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Typography variant="h5" fontWeight="bold">
                Writing Blog in: {selectedCategory}
              </Typography>
            </Grid>
          </Grid>

          <TextField
            fullWidth
            label="Set a Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ my: 2 }}
          />

          <TextField
            fullWidth
            label="Short Description"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            sx={{ my: 2 }}
          />

          <TextField
            fullWidth
            label="Enter the Content"
            multiline
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{ my: 2 }}
          />

          <Typography variant="body1" sx={{ mt: 2 }}>
            📖 Estimated Reading Time: <strong>{readingTime} min</strong>
          </Typography>

          <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
            <Grid item>
              <Typography variant="body1">Upload a Banner</Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Upload Banner">
                <IconButton
                  component="label"
                  sx={{
                    border: "2px dashed gray",
                    borderRadius: "8px",
                    p: 2,
                  }}
                >
                  <input
                    type="file"
                    hidden
                    onChange={(e) => setBanner(e.target.files[0])}
                  />
                  <AddPhotoAlternateIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>

          {banner && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Uploaded: {banner.name}
            </Typography>
          )}

          <TextField
            fullWidth
            label="Add Tags (Press Enter to Add)"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyPress={handleAddTag}
            sx={{ my: 2 }}
          />

          <Grid container spacing={1}>
            {tags.map((tag, index) => (
              <Grid item key={index}>
                <Chip
                  label={tag}
                  onDelete={() => setTags(tags.filter((t) => t !== tag))}
                  color="primary"
                  variant="outlined"
                />
              </Grid>
            ))}
          </Grid>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: "#FF6F61",
              "&:hover": { backgroundColor: "#E65C55" },
            }}
            onClick={handlePreview}
          >
            Preview Blog
          </Button>
        </Card>
      )}

      {/* Preview Modal */}
      <Dialog
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent>
          <Card
            sx={{ boxShadow: 3, borderRadius: 3, overflow: "hidden", p: 2 }}
          >
            {/* Blog Image */}
            {banner && (
              <img
                src={URL.createObjectURL(banner)}
                alt="Blog Banner"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            )}

            {/* Bookmark Icon */}
            <IconButton sx={{ position: "absolute", top: 10, right: 10 }}>
              <BookmarkBorderIcon />
            </IconButton>

            {/* Blog Content */}
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                By <strong>Chelsey Wise</strong> • {readingTime} min read
              </Typography>

              <Typography variant="body2" sx={{ mt: 1 }}>
                {shortDescription}
              </Typography>

              <Typography variant="body1" sx={{ mt: 2 }}>
                {content}
              </Typography>

              {/* Stats: Likes, Views, Comments */}
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 2, p: 1, borderRadius: 1, bgcolor: "#f5f5f5" }}
              >
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <FavoriteBorderIcon fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography variant="body2">1902</Typography>
                </Grid>

                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <VisibilityIcon fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography variant="body2">943</Typography>
                </Grid>

                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <ChatBubbleOutlineIcon fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography variant="body2">20</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setPreviewOpen(false)}>Close</Button>
          <Button variant="contained" color="primary">
            Confirm Publish
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CreateBlog;
