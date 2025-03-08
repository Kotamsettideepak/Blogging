import React, { useState } from "react";
import {
  Avatar,
  Typography,
  Button,
  Grid,
  IconButton,
  Box,
  Paper,
  Chip,
  Container,
  Divider,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Edit,
  Link,
  LinkedIn,
  Twitter,
  Article,
  Favorite,
  Comment,
  Schedule,
  Book,
} from "@mui/icons-material";
import SavedBlogs from "../components/SavedBlogs.jsx";
import UserBlogs from "../components/UserBlogs.jsx";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: "Deepak ",
    bio: "Technology writer passionate about web development and open source. Creating content to help developers grow their skills and careers.",
    profilePic: "https://example.com/profile.jpg",
    social: {
      website: "deepak.com",
      linkedIn: "linkedin.com/in/deepak",
      twitter: "@deepakwrites",
    },
    stats: {
      posts: 45,
      readTime: "1.2k hours",
      likes: "2.3k",
      comments: "456",
      saved: "789",
    },
    categories: [
      "Web Development",
      "React",
      "Programming",
      "Career Advice",
      "Open Source",
    ],
  });

  const [editFormData, setEditFormData] = useState({ ...userData });

  const handleEditProfile = () => {
    setEditMode(true);
    setEditFormData({ ...userData }); // Initialize form data with current user data
  };

  const handleCloseEdit = () => {
    setEditMode(false);
  };

  const handleSaveProfile = () => {
    setUserData({ ...editFormData }); // Update user data with edited data
    setEditMode(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      social: {
        ...prev.social,
        [name]: value,
      },
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Profile Header Section */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          borderRadius: 4,
          background: "linear-gradient(45deg, #f8f9fa 30%, #ffffff 90%)",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={3} textAlign="center">
            <Avatar
              src={userData.profilePic}
              sx={{
                width: 160,
                height: 160,
                mb: 3,
                border: "3px solid",
                borderColor: "primary.main",
                boxShadow: 3,
              }}
            />
            <Button
              variant="contained"
              startIcon={<Edit />}
              onClick={handleEditProfile}
              sx={{
                borderRadius: 20,
                px: 4,
                textTransform: "none",
                boxShadow: 0,
                "&:hover": { boxShadow: 2 },
              }}
            >
              Edit Profile
            </Button>
          </Grid>

          <Grid item xs={12} md={9}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 700, color: "text.primary" }}
            >
              {userData.name}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: "1.1rem",
                lineHeight: 1.6,
                color: "text.secondary",
                maxWidth: "80%",
              }}
            >
              {userData.bio}
            </Typography>

            <Box sx={{ display: "flex", gap: 3, mb: 3 }}>
              {userData.social.website && (
                <IconButton
                  href={userData.social.website}
                  target="_blank"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Link fontSize="medium" />
                </IconButton>
              )}
              {userData.social.linkedIn && (
                <IconButton
                  href={userData.social.linkedIn}
                  target="_blank"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <LinkedIn fontSize="medium" />
                </IconButton>
              )}
              {userData.social.twitter && (
                <IconButton
                  href={`https://twitter.com/${userData.social.twitter}`}
                  target="_blank"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Twitter fontSize="medium" />
                </IconButton>
              )}
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Stats Section */}
      <Paper
        elevation={0}
        sx={{ p: 4, mb: 4, borderRadius: 4, bgcolor: "background.paper" }}
      >
        <Grid container spacing={4} justifyContent="center">
          {Object.entries(userData.stats).map(([key, value]) => (
            <Grid item xs={6} sm={4} md={2} key={key}>
              <Box textAlign="center" sx={{ p: 2 }}>
                <Box
                  sx={{
                    bgcolor: {
                      posts: "success.light", // Green
                      readTime: "warning.light", // Orange
                      likes: "error.light", // Red
                      comments: "info.light", // Light Blue
                      saved: "secondary.light", // Purple
                    }[key],
                    width: 56,
                    height: 56,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 1.5,
                  }}
                >
                  {
                    {
                      posts: (
                        <Article
                          fontSize="medium"
                          sx={{ color: "success.main" }}
                        />
                      ),
                      readTime: (
                        <Schedule
                          fontSize="medium"
                          sx={{ color: "warning.main" }}
                        />
                      ),
                      likes: (
                        <Favorite
                          fontSize="medium"
                          sx={{ color: "error.main" }}
                        />
                      ),
                      comments: (
                        <Comment
                          fontSize="medium"
                          sx={{ color: "info.main" }}
                        />
                      ),
                      saved: (
                        <Book
                          fontSize="medium"
                          sx={{ color: "secondary.main" }}
                        />
                      ),
                    }[key]
                  }
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "primary.main" }}
                >
                  {value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                  }}
                >
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Writing Interests
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {userData.categories.map((category) => (
              <Chip
                key={category}
                label={category}
                variant="filled"
                color="primary"
                sx={{
                  borderRadius: 1,
                  px: 1.5,
                  "& .MuiChip-label": { fontWeight: 500 },
                }}
              />
            ))}
          </Box>
        </Box>
      </Paper>

      {/* Blogs Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 700,
            color: "text.primary",
          }}
        >
          Published Articles
        </Typography>
        <UserBlogs />
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 700,
            color: "text.primary",
          }}
        >
          Saved Collections
        </Typography>
        <SavedBlogs />
      </Box>

      {/* Edit Profile Dialog */}
      <Dialog open={editMode} onClose={handleCloseEdit} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={editFormData.name}
              onChange={handleFormChange}
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Bio"
              name="bio"
              value={editFormData.bio}
              onChange={handleFormChange}
              multiline
              rows={4}
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Website"
              name="website"
              value={editFormData.social.website}
              onChange={handleSocialChange}
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="LinkedIn"
              name="linkedIn"
              value={editFormData.social.linkedIn}
              onChange={handleSocialChange}
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Twitter"
              name="twitter"
              value={editFormData.social.twitter}
              onChange={handleSocialChange}
              sx={{ mb: 3 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button onClick={handleSaveProfile} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Profile;
