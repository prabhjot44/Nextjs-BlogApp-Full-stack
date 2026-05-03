"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", px: { xs: 2, sm: 3 }, gap: 1 }}>
        {/* Brand */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8, flexGrow: 1 }}>
          <AutoStoriesIcon sx={{ color: "primary.light", fontSize: 28 }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #a78bfa 0%, #67e8f9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.5px",
            }}
          >
            TopicHub
          </Typography>
        </Link>

        {/* Nav actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {session?.user ? (
            <>
              <Button
                component={Link}
                href="/addTopic"
                variant="contained"
                startIcon={<AddCircleOutlinedIcon />}
                size="small"
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                Add Topic
              </Button>
              <Tooltip title={session.user.name || "Account"}>
                <Avatar
                  sx={{
                    width: 36,
                    height: 36,
                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                  component={Link}
                  href="/dashboard"
                >
                  {session.user.name?.[0]?.toUpperCase() || "U"}
                </Avatar>
              </Tooltip>
              <Tooltip title="Sign out">
                <Button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  variant="outlined"
                  size="small"
                  color="error"
                  startIcon={<LogoutIcon />}
                  sx={{ minWidth: 0, px: 1.5 }}
                >
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>Logout</Box>
                </Button>
              </Tooltip>
            </>
          ) : (
            <>
              <Button
                component={Link}
                href="/login"
                variant="outlined"
                size="small"
                sx={{ borderColor: "rgba(167,139,250,0.4)", color: "primary.light" }}
              >
                Login
              </Button>
              <Button
                component={Link}
                href="/register"
                variant="contained"
                size="small"
              >
                Sign up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
