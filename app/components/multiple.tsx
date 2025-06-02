"use client";
import { Fab, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { yellow } from "@mui/material/colors";

export default function Multiple({ modifiers }: any) {
  const [count, setCount] = React.useState<any>(0);
  return (
    <div className="flex justify-between items-center">
      <div>
        <Typography component="span">{modifiers.title}</Typography>
      </div>
      <div className="flex gap-3">
        <Typography component="span">
          {modifiers.weight} г / {modifiers.price} ₴
        </Typography>
        <IconButton
          aria-label="delete"
          size="small"
          sx={{
            backgroundColor: yellow[500],
            color: "white",
            ":hover": "none",
          }}
          onClick={() => setCount(count - 1)}
        >
          <RemoveIcon fontSize="inherit" />
        </IconButton>
        <Typography component="span">{count}</Typography>
        <IconButton
          aria-label="delete"
          size="small"
          sx={{
            backgroundColor: yellow[500],
            color: "white",
            ":hover": "none",
          }}
          onClick={() => setCount(count + 1)}
        >
          <AddIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
}
