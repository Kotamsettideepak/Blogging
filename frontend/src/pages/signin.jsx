import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Grid,
  Container,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email, "Password:", password);
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          color: "white",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Sign In
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": { borderColor: "rgba(255,255,255,0.23)" },
              "&:hover fieldset": { borderColor: "rgba(255,255,255,0.5)" },
            },
            "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
          }}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": { borderColor: "rgba(255,255,255,0.23)" },
              "&:hover fieldset": { borderColor: "rgba(255,255,255,0.5)" },
            },
            "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{
            mt: 3,
            mb: 2,
            py: 1.5,
            fontSize: "1.1rem",
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#115293" },
          }}
        >
          Sign In
        </Button>

        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="body1" sx={{ color: "white" }}>
              New User?
              <Link
                component={NavLink}
                to="register"
                sx={{
                  color: "#64b5f6",
                  "&:hover": { color: "#42a5f5" },
                }}
              >
                Register here
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Signin;
