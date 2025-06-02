"use client";
import { Container, Grid } from "@mui/material";
import Categories from "./components/categories";
import CenterMode from "./components/slider";
import CardItem from "./components/card-item";
import { useEffect, useState } from "react";

export default function Home() {
  const [pizzas, setPizzas] = useState<any>([]);
  useEffect(() => {
    fetch("/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
      });
  }, []);
  if (!pizzas) {
    return null;
  }
  return (
    <div className="">
      <Categories />
      <CenterMode />
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ mx: "auto" }}>
          {pizzas?.map((e: any) => (
            <Grid size={4} key={e.id}>
              <CardItem title={e.title} products={e.products} image={e.image} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
