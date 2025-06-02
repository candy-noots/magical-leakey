import React from "react";
import { Grid } from "@mui/material";

export default function ProductIdLeft({product}:any) {
    return <Grid size={6} sx={{ p: 16 }}>
            <img
              src={`https://pizzahouse.ua/` + product.image.large}
              className="w-full h-full object-contain"
              alt={product.image.title}
            />
          </Grid>
}