"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, InputAdornment, inputBaseClasses } from "@mui/material";

export default function ModalPopup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        sx={{ color: "black", fontWeight: "normal" }}
        onClick={handleClickOpen}
      >
        LOGIN
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              console.log(formJson);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent sx={{ color: "black" }}>
          <DialogContentText sx={{ mb: 2 }}>
            Please enter your phone number and password
          </DialogContentText>
          <TextField
            id="standard-suffix-shrink"
            label="Номер телефону"
            variant="outlined"
            fullWidth
            color="secondary"
            slotProps={{
              htmlInput: {
                sx: { ml: 1 },
              },
              input: {
                startAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      opacity: 0,
                      pointerEvents: "none",
                      [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                        opacity: 1,
                      },
                    }}
                  >
                    +380
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            color="secondary"
          />
          <Box sx={{ mt: 1 }}>
            <Button color="inherit">Зареєструватися</Button>
            <Button color="inherit">Забули пароль?</Button>
          </Box>
        </DialogContent>
        <DialogActions color="inherit">
          <Button color="inherit" onClick={handleClose}>
            Close
          </Button>
          <Button color="inherit" type="submit">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
