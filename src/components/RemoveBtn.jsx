"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteIcon from "@mui/icons-material/Delete";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to delete this topic?");
    if (!confirmed) return;

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
        router.push("/dashboard");
      }
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Tooltip title="Delete topic">
      <span>
        <IconButton
          onClick={removeTopic}
          disabled={loading}
          size="small"
          sx={{
            color: "error.main",
            border: "1px solid",
            borderColor: "rgba(239,68,68,0.25)",
            borderRadius: "8px",
            width: 34,
            height: 34,
            transition: "all 0.2s",
            "&:hover": {
              background: "rgba(239,68,68,0.12)",
              borderColor: "rgba(239,68,68,0.5)",
              transform: "scale(1.05)",
            },
            "&:disabled": { opacity: 0.5 },
          }}
        >
          {loading ? (
            <CircularProgress size={16} color="error" />
          ) : (
            <DeleteIcon fontSize="small" />
          )}
        </IconButton>
      </span>
    </Tooltip>
  );
}
