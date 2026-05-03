"use client";

import TopicsListLoggedIn from "@/components/TopicsListLoggedIn";
import UserInfo from "@/components/UserInfo";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export default function Dashboard() {
  return (
    <Box sx={{ py: 4 }}>
      <UserInfo />

      {/* Section header */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FormatListBulletedIcon sx={{ color: "primary.light" }} />
          <Typography variant="h5" fontWeight={700}>
            My Topics
          </Typography>
        </Box>
        <Button
          component={Link}
          href="/addTopic"
          variant="contained"
          startIcon={<AddCircleOutlinedIcon />}
          size="small"
        >
          Add Topic
        </Button>
      </Box>

      <Divider sx={{ mb: 3, borderColor: "divider" }} />

      <TopicsListLoggedIn />
    </Box>
  );
}
