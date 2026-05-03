"use client";

import { useState } from "react";
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
import EditNoteIcon from "@mui/icons-material/EditNote";
import SaveIcon from "@mui/icons-material/Save";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}topics/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) throw new Error("Failed to update topic");

      router.refresh();
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 120px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 520,
          p: { xs: 2, sm: 3 },
          position: "relative",
          overflow: "visible",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: -1,
            borderRadius: "17px",
            background: "linear-gradient(135deg, #06b6d433, #7c3aed33)",
            zIndex: -1,
          },
        }}
      >
        <CardContent sx={{ p: 0 }}>
          {/* Header */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "12px",
                background: "linear-gradient(135deg, #06b6d4, #0e7490)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(6,182,212,0.4)",
              }}
            >
              <EditNoteIcon sx={{ color: "white", fontSize: 24 }} />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                Edit Topic
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update your topic details
              </Typography>
            </Box>
          </Box>

          <Collapse in={!!error}>
            <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }} onClose={() => setError("")}>
              {error}
            </Alert>
          </Collapse>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            <TextField
              label="Topic Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              fullWidth
              required
              disabled={loading}
              slotProps={{ htmlInput: { maxLength: 100 } }}
              helperText={`${newTitle.length}/100`}
            />
            <TextField
              label="Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              fullWidth
              required
              multiline
              rows={4}
              disabled={loading}
              slotProps={{ htmlInput: { maxLength: 500 } }}
              helperText={`${newDescription.length}/500`}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              startIcon={loading ? null : <SaveIcon />}
              sx={{
                mt: 1,
                py: 1.5,
                background: "linear-gradient(135deg, #06b6d4, #0e7490)",
                boxShadow: "0 4px 20px rgba(6,182,212,0.4)",
                "&:hover": {
                  background: "linear-gradient(135deg, #0891b2, #164e63)",
                  boxShadow: "0 6px 24px rgba(6,182,212,0.5)",
                },
              }}
            >
              {loading ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CircularProgress size={20} color="inherit" />
                  Saving…
                </Box>
              ) : (
                "Save Changes"
              )}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
