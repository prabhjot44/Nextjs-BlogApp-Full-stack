"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import Chip from "@mui/material/Chip";
import LogoutIcon from "@mui/icons-material/Logout";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

export default function UserInfo() {
  const { data: session } = useSession();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    await signOut({ callbackUrl: "/" });
  };

  const initials = session?.user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) || "U";

  return (
    <Card
      sx={{
        mb: 4,
        overflow: "visible",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          borderRadius: "16px 16px 0 0",
          background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, flexWrap: "wrap" }}>
          {/* Avatar */}
          <Avatar
            sx={{
              width: 64,
              height: 64,
              fontSize: "1.4rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
              flexShrink: 0,
            }}
          >
            {initials}
          </Avatar>

          {/* Info */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
              <PersonIcon sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="h6" fontWeight={700} noWrap>
                {session?.user?.name || "User"}
              </Typography>
              <Chip label="Member" size="small" color="primary" sx={{ height: 20, fontSize: "0.65rem" }} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <EmailIcon sx={{ fontSize: 14, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary" noWrap>
                {session?.user?.email}
              </Typography>
            </Box>
          </Box>

          {/* Logout */}
          <Button
            onClick={handleLogout}
            disabled={loggingOut}
            variant="outlined"
            color="error"
            size="small"
            startIcon={loggingOut ? null : <LogoutIcon />}
            sx={{
              borderColor: "rgba(239,68,68,0.3)",
              "&:hover": { borderColor: "error.main", background: "rgba(239,68,68,0.08)" },
            }}
          >
            {loggingOut ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CircularProgress size={14} color="error" />
                Logging out…
              </Box>
            ) : (
              "Logout"
            )}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
