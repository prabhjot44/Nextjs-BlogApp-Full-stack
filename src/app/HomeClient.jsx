"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function HomeClient({ children }) {
  return (
    <Box sx={{ py: 6 }}>
      {/* Hero */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Chip
          icon={<AutoStoriesIcon sx={{ fontSize: "16px !important" }} />}
          label="Discover topics from the community"
          size="small"
          sx={{
            mb: 3,
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(124,58,237,0.3)",
            color: "primary.light",
            fontWeight: 600,
          }}
        />
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2.2rem", sm: "3rem" },
            background: "linear-gradient(135deg, #f1f5f9 30%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Share what you know.
          <br />
          Learn what you don&apos;t.
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mb: 4, maxWidth: 480, mx: "auto" }}>
          A collaborative space to post, discover, and discuss topics across any subject.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button component={Link} href="/register" variant="contained" size="large" sx={{ px: 4 }}>
            Get Started Free
          </Button>
          <Button component={Link} href="/login" variant="outlined" size="large" sx={{ px: 4, borderColor: "rgba(167,139,250,0.4)", color: "primary.light" }}>
            Sign In
          </Button>
        </Box>
      </Box>

      <Divider sx={{ mb: 4, borderColor: "divider" }}>
        <Chip label="Latest Topics" sx={{ background: "rgba(255,255,255,0.05)", color: "text.secondary", fontSize: "0.8rem" }} />
      </Divider>

      {/* Topics list */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <FormatListBulletedIcon sx={{ color: "primary.light", fontSize: 20 }} />
        <Typography variant="h6" fontWeight={700}>
          Browse Topics
        </Typography>
      </Box>
      
      {children}
    </Box>
  );
}
