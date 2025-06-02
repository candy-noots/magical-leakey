import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Link from "next/link";

export default function CardItem({ title, products, image }: any) {
  const [active, setActive] = React.useState<number>(0);
  const changeActive = (element: any) => {
    setActive(element);
  };
  if (!products) return null;
  return (
    <Link href={`${products[active].url}`}>
      <Card sx={{ width: "100%", height: "100%" }}>
        <img
          src={`https://pizzahouse.ua/` + image.large}
          alt="green iguana"
          className="object-contain"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {products[0]?.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 2,
              backgroundColor: "rgb(246, 246, 246)",
              zIndex: 10,
            }}
          >
            <Button
              sx={{
                backgroundColor: active === 0 ? "#ffeb3b" : "",
                width: "100%",
                color: "black",
                fontSize: 12,
                py: 1,
                fontWeight: "normal",
              }}
              onClick={() => changeActive(0)}
            >
              {products[0].weight} {"гр."}
            </Button>
            <Button
              sx={{
                backgroundColor: active === 1 ? "#ffeb3b" : "",
                width: "100%",
                color: "black",
                fontSize: 12,
                py: 1,
                fontWeight: "normal",
              }}
              onClick={() => changeActive(1)}
            >
              {products[1].weight} {"гр."}
            </Button>
          </Box>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            m: 1,
            zIndex: 10,
          }}
        >
          <Typography
            sx={{ ml: 1.5 }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {products[active]?.price} $
          </Typography>

          <Button
            sx={{
              backgroundColor: "#ffeb3b",
              color: "black",
              p: 1,
            }}
            size="small"
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
