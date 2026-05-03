"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      const resUserExists = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}userExists`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();
      if (user) {
        setError("An account with this email already exists.");
        setLoading(false);
        return;
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        e.target.reset();
        router.push("/login");
      } else {
        throw new Error("Registration failed. Please try again.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
      }}
    >
      <Card sx={{ width: "100%", maxWidth: 440, p: { xs: 2, sm: 3 } }}>
        <CardContent sx={{ p: 0 }}>
          {/* Brand */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "16px",
                background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
                mb: 2,
              }}
            >
              <PersonAddIcon sx={{ color: "white", fontSize: 28 }} />
            </Box>
            <Typography variant="h5" fontWeight={700}>
              Create Account
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              Join TopicHub today
            </Typography>
          </Box>

          <Collapse in={!!error}>
            <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }} onClose={() => setError("")}>
              {error}
            </Alert>
          </Collapse>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              disabled={loading}
              autoComplete="name"
            />
            <TextField
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              disabled={loading}
              autoComplete="email"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              disabled={loading}
              autoComplete="new-password"
              helperText="Minimum 6 characters recommended"
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              startIcon={loading ? null : <PersonAddIcon />}
              sx={{ py: 1.5, mt: 0.5 }}
            >
              {loading ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CircularProgress size={20} color="inherit" />
                  Creating account…
                </Box>
              ) : (
                "Create Account"
              )}
            </Button>
          </Box>

          <Divider sx={{ my: 3, borderColor: "divider" }} />

          <Typography variant="body2" align="center" color="text.secondary">
            Already have an account?{" "}
            <Link
              href="/login"
              style={{ color: "#a78bfa", textDecoration: "none", fontWeight: 600 }}
            >
              Sign in
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
