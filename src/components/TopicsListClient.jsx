"use client";

import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import EditIcon from "@mui/icons-material/Edit";
import ArticleIcon from "@mui/icons-material/Article";

export default function TopicsListClient({ topics }) {
  if (!topics || topics.length === 0) {
    return (
      <Box sx={{ mt: 4 }}>
        <Alert severity="info" sx={{ borderRadius: 2 }}>
          No topics yet. Be the first to add one!
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
      {topics.map((topic) => (
        <Card
          key={topic._id}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 2,
            p: 1,
          }}
        >
          <CardContent sx={{ flex: 1, p: "12px 16px !important" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
              <ArticleIcon sx={{ fontSize: 18, color: "primary.light", opacity: 0.8 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.3, fontSize: "1.05rem" }}>
                {topic.title}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6, ml: "26px" }}
            >
              {topic.description}
            </Typography>
          </CardContent>

          <Box sx={{ display: "flex", gap: 1, alignItems: "center", pr: 1.5, pt: 1.5, flexShrink: 0 }}>
            <RemoveBtn id={topic._id} />
            <Tooltip title="Edit topic">
              <IconButton
                component={Link}
                href={`/editTopic/${topic._id}`}
                size="small"
                sx={{
                  color: "secondary.main",
                  border: "1px solid",
                  borderColor: "rgba(6,182,212,0.25)",
                  borderRadius: "8px",
                  width: 34,
                  height: 34,
                  transition: "all 0.2s",
                  "&:hover": {
                    background: "rgba(6,182,212,0.12)",
                    borderColor: "rgba(6,182,212,0.5)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
