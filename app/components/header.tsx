import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HeaderMenu from "./header-menu";
import { Container } from "@mui/material";
import HeaderSelect from "./header-select";
import ModalPopup from "./modal-popup";
import Basket from "./basket";
import Link from "next/link";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#FAE900" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href={"/"}>
                <img
                  src="https://pizzahouse.ua/_next/static/media/logo.0053162d.svg"
                  style={{ width: 55, height: 55, cursor: "pointer" }}
                />
              </Link>
              <HeaderMenu />
              <Button
                sx={{ backgroundColor: "#f44336" }}
                variant="contained"
                size="medium"
                startIcon={<LocalOfferIcon />}
              >
                Акція
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <HeaderSelect title="ENG" links={["ENG", "RUS", "UKR"]} />
              <HeaderSelect
                title="8-800-000-00-00"
                links={["38000000000", "18000000000", "87000000000"]}
              />
              <ModalPopup />
              <Basket />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
