import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  useMediaQuery,
  Drawer,
  IconButton,
  MenuItem,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Menu, Search as SearchIcon } from "@mui/icons-material";
import logo from "../images/company_logo.png";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:768px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Profile", path: "profile" },
    { label: "Contact", path: "contact" },
  ];

  const handleSearch = () => console.log("Searching for:", searchQuery);

  return (
    <AppBar position="static" className={styles.navbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Company Logo" className={styles.logo} />
            {!isMobile && <Typography variant="h6">Just Blog</Typography>}
          </div>

          {!isMobile ? (
            <>
              <TextField
                variant="outlined"
                placeholder="Search…"
                size="small"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSearch} size="small">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <div className={styles.navItems}>
                {navItems.map(({ label, path }) => (
                  <Button
                    key={label}
                    color="inherit"
                    onClick={() => navigate(path)}
                  >
                    {label}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  onClick={() => navigate("create-blog")}
                >
                  Create Blog
                </Button>
              </div>
            </>
          ) : (
            <>
              <TextField
                variant="outlined"
                placeholder="Search…"
                size="small"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.mobileSearch}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSearch} size="small">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                <Menu />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{ className: styles.drawerPaper }}
              >
                <div className={styles.drawerContent}>
                  {navItems.map(({ label, path }) => (
                    <MenuItem
                      key={label}
                      onClick={() => navigate(path) || setDrawerOpen(false)}
                    >
                      {label}
                    </MenuItem>
                  ))}
                  <Button
                    variant="contained"
                    onClick={() => navigate("create-blog")}
                  >
                    Create Blog
                  </Button>
                </div>
              </Drawer>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
