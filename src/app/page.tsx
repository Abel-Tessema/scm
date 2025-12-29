"use client";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";

export default function LoginPage() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography component="h1" variant="h5" align="center">
            Student Login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Sign In
          </Button>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 5 }}
          >
            Copyright © SCM Project 2025.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
