import React, { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CircularProgress,
  Container,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility"; // For Views
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"; // For Comments
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // For Likes
import { Bookmark, BookmarkBorder } from "@mui/icons-material"; // Import bookmark icons
import { fetchTrendingBlogs } from "../api/index";

const UserPreferance = () => {
  const [page, setPage] = useState(1);
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState(new Set()); // Track bookmarked blogs
  const carouselRef = useRef(null);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["trendingBlogs", page],
    queryFn: () => fetchTrendingBlogs(page),
    keepPreviousData: true,
  });

  // Toggle bookmark for a blog
  const toggleBookmark = (blogId) => {
    setBookmarkedBlogs((prev) => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(blogId)) {
        newBookmarks.delete(blogId);
      } else {
        newBookmarks.add(blogId);
      }
      return newBookmarks;
    });
  };

  if (isLoading) {
    return (
      <Container sx={{ display: "flex", justifyContent: "center", py: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography color="error">Error loading blogs.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth={false} sx={{ py: 4, px: 0 }}>
      <Box sx={{ maxWidth: 1280, mx: "auto", px: 2 }}>
        <Grid container alignItems="center" spacing={2} wrap="nowrap">
          <Grid item sx={{ minWidth: 150 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Preference
            </Typography>
          </Grid>

          <Grid item xs sx={{ overflow: "hidden" }}>
            <Grid
              ref={carouselRef}
              container
              spacing={3}
              wrap="nowrap"
              sx={{
                overflowX: "auto",
                "&::-webkit-scrollbar": { display: "none" },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
                py: 2,
                px: 1,
                mx: -1,
              }}
            >
              {data.map((blog) => (
                <Grid item key={blog.id} sx={{ minWidth: 300, flexShrink: 0 }}>
                  <Card
                    sx={{
                      height: 320,
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      boxShadow: 3,
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.02)" },
                      position: "relative", // For positioning the bookmark icon
                    }}
                  >
                    {/* Bookmark Icon */}
                    <IconButton
                      onClick={() => toggleBookmark(blog.id)}
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        zIndex: 1,
                        color: bookmarkedBlogs.has(blog.id)
                          ? "primary.main"
                          : "action.active",
                        "&:hover": {
                          color: "primary.dark",
                        },
                      }}
                    >
                      {bookmarkedBlogs.has(blog.id) ? (
                        <Bookmark />
                      ) : (
                        <BookmarkBorder />
                      )}
                    </IconButton>

                    <CardMedia
                      component="img"
                      height="180"
                      image={blog.blog_img}
                      alt={blog.topic}
                      sx={{
                        objectFit: "cover",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h3"
                        noWrap
                      >
                        {blog.topic}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        By {blog.writer} • {blog.readTime} read
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: "auto",
                          background: "#f5f5f5",
                          p: 1,
                          borderRadius: 1,
                        }}
                      >
                        <Box sx={{ display: "flex", gap: 1.5 }}>
                          <Typography
                            variant="caption"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <FavoriteBorderIcon /> {blog.likes}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <VisibilityIcon /> {blog.views}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <ChatBubbleOutlineIcon /> {blog.commentCount}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

              {/* View All Button */}
              <Grid item sx={{ minWidth: 300, flexShrink: 0 }}>
                <Button
                  variant="outlined"
                  sx={{
                    height: 320,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 3,
                    border: "2px dashed",
                    borderColor: "primary.main",
                    color: "primary.main",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  View All
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default UserPreferance;
