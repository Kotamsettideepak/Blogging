import React from "react";
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
import logo from "../assets/company_logo.png";
import styles from "../styles/NavBar.module.css";

// Moved SearchField outside the NavBar component
const SearchField = ({
  className,
  mobile,
  searchQuery,
  setSearchQuery,
  handleSearch,
}) => (
  <TextField
    variant="outlined"
    placeholder="Search…"
    size="small"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className={className}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            onClick={handleSearch}
            className={mobile ? styles.mobileSearchButton : styles.searchButton}
            size="small"
          >
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
);

const NavBar = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:768px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Profile", path: "profile" },
    { label: "Contact", path: "contact" },
  ];

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <AppBar position="static" className={styles.navbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Company Logo" className={styles.logo} />

            {!isMobile && (
              <Typography variant="h6" className={styles.companyTitle}>
                Just Blog
              </Typography>
            )}
          </div>

          {!isMobile ? (
            <div className={styles.desktopContent}>
              <SearchField
                className={styles.searchField}
                mobile={false}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />

              <div className={styles.navItems}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    color="inherit"
                    onClick={() => navigate(item.path)}
                    className={styles.navButton}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  onClick={() => navigate("create-blog")}
                  className={styles.createButton}
                >
                  Create Blog
                </Button>
              </div>
            </div>
          ) : (
            <div className={styles.mobileContent}>
              <SearchField
                className={styles.mobileSearch}
                mobile={true}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />

              <IconButton
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                className={styles.menuButton}
              >
                <Menu />
              </IconButton>
            </div>
          )}

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{ className: styles.drawerPaper }}
          >
            <div className={styles.drawerContent}>
              {navItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => {
                    navigate(item.path);
                    setDrawerOpen(false);
                  }}
                  className={styles.menuItem}
                >
                  {item.label}
                </MenuItem>
              ))}
              <Button
                variant="contained"
                onClick={() => navigate("create-blog")}
                className={styles.mobileCreateButton}
              >
                Create Blog
              </Button>
            </div>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
