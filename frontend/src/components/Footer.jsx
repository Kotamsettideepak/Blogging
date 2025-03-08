import React from "react";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import logo from "../assets/company_logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        py: 8,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mr: 2 }}
              >
                <img
                  src={logo}
                  alt="Company Logo"
                  width={120} // width here as per the desired size
                  style={{
                    height: 40, // Set height in style
                    width: 40,
                    filter: "invert(1)", // Using filter to invert the logo colors
                    transition: "transform 0.3s ease-in-out", // Smooth transition for hover effect
                  }}
                />
                <Typography variant="h6">Just Blog</Typography>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Discover thought-provoking content and share your perspectives
              with the world.
            </Typography>
          </Grid>

          {/* Quick NavLinks */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Explore
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <NavLink
                to="/"
                sx={{
                  mb: 1,
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                sx={{
                  mb: 1,
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                sx={{
                  mb: 1,
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Contact
              </NavLink>
              <NavLink
                to="/blog"
                sx={{
                  mb: 1,
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Blog
              </NavLink>
            </Box>
          </Grid>

          {/* Legal */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Legal
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <NavLink
                to="/privacy"
                sx={{
                  mb: 1,
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Privacy Policy
              </NavLink>
              <NavLink
                to="/terms"
                sx={{
                  mb: 1,
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Terms of Service
              </NavLink>
              <NavLink
                to="/disclaimer"
                sx={{
                  mb: 1,
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Disclaimer
              </NavLink>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Connect With Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter
                  sx={{
                    fontSize: 30,
                    color: "white",
                    "&:hover": { opacity: 0.7 },
                  }}
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  sx={{
                    fontSize: 30,
                    color: "white",
                    "&:hover": { opacity: 0.7 },
                  }}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  sx={{
                    fontSize: 30,
                    color: "white",
                    "&:hover": { opacity: 0.7 },
                  }}
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn
                  sx={{
                    fontSize: 30,
                    color: "white",
                    "&:hover": { opacity: 0.7 },
                  }}
                />
              </a>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, backgroundColor: "rgba(255,255,255,0.2)" }} />

        {/* Copyright */}
        <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Just Blog. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
