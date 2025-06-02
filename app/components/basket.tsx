"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, Typography } from "@mui/material";

export default function Basket() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id={"id_btn"}
        aria-controls={open ? "id_menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          borderRadius: 8,
          py: 1,
          px: 1.5,
          backgroundColor: "white",
          color: "black",
        }}
        variant="contained"
      >
        CART | 0 | 0 $
      </Button>
      <Menu
        id={"id_menu"}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "id_btn",
        }}
      >
        <div className="m-5">
          <Typography variant="h6">Cart is empty</Typography>
        </div>
      </Menu>
    </div>
  );
}
