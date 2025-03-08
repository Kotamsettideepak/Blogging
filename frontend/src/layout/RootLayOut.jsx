import React from "react";
import NavBar from "../components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const RootLayOut = () => {
  const location = useLocation();

  const hideLoginLayout = location.pathname.startsWith("/login");
  const hidePreferenceLayout = location.pathname.startsWith("/preferences");

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {!hideLoginLayout && !hidePreferenceLayout && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1100, // MUI app bar default zIndex
            backgroundColor: "white",
            boxShadow: 1, // MUI shadow
          }}
        >
          <NavBar />
        </Box>
      )}

      {/* Add top padding equal to NavBar height to prevent content overlap */}
      <Box
        sx={{
          flex: 1,
          mt: !hideLoginLayout && !hidePreferenceLayout ? "64px" : "0px",
          p: 2,
        }}
      >
        <Outlet />
      </Box>

      {!hideLoginLayout && !hidePreferenceLayout && <Footer />}
    </Box>
  );
};

export default RootLayOut;
