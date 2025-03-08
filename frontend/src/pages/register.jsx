import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
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

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    navigate("/preferences");
    // Handle registration logic here
    console.log("Registration Data:", { email, password });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  React.useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  }, [password, confirmPassword]);

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
          Create Account
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  edge="end"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
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
          label="Confirm Password"
          variant="outlined"
          type={showConfirmPassword ? "text" : "password"}
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={Boolean(passwordError)}
          helperText={passwordError}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowConfirmPassword}
                  edge="end"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": { borderColor: "rgba(255,255,255,0.23)" },
              "&:hover fieldset": { borderColor: "rgba(255,255,255,0.5)" },
            },
            "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
            "& .MuiFormHelperText-root": {
              color: "#f44336",
              fontSize: "0.875rem",
            },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          type="submit"
          disabled={Boolean(passwordError)}
          sx={{
            mt: 3,
            mb: 2,
            py: 1.5,
            fontSize: "1.1rem",
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#115293" },
            "&:disabled": { backgroundColor: "#616161" },
          }}
        >
          Create Account
        </Button>

        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="body1" sx={{ color: "white" }}>
              Already have an account?{" "}
              <Link
                component={NavLink}
                to="/login"
                sx={{
                  color: "#64b5f6",
                  "&:hover": { color: "#42a5f5" },
                }}
              >
                Sign In
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Register;
