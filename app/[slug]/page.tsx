import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { yellow } from "@mui/material/colors";
import { getPizzaId } from "../../lib/data";
import { BorderBottom } from "@mui/icons-material";
import Multiple from "../components/multiple";

interface Props {
  className?: string;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const response = await getPizzaId(params.slug);
  const product = response.pageProps.product;

  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ mx: "auto" }}>
          <Grid size={6} sx={{ p: 16 }}>
            <img
              src={`https://pizzahouse.ua` + product.image.large}
              className="w-full h-full object-contain"
              alt={product.image.title}
            />
          </Grid>
          <Grid size={6} sx={{ mt: 15 }}>
            <Typography variant={"h4"}>{product.title}</Typography>
            <Typography variant={"h4"}>{product.weight}</Typography>
            <Typography variant="subtitle1" gutterBottom>
              {product.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: 2,
                backgroundColor: "rgb(246, 246, 246)",
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h4"
                sx={{ width: "100%", textAlign: "center", my: "auto" }}
              >
                {product.price} $
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#ffeb3b",
                  width: "100%",
                  color: "black",
                  py: 1.5,
                  m: 1.2,
                  borderRadius: 3,
                  fontWeight: "normal",
                }}
              >
                У кошик
              </Button>
            </Box>

            <Typography variant="h5" sx={{ mt: 2 }}>
              Хочу додати
            </Typography>
            {product.group_modifiers.map((e: any) => {
              return (
                <Accordion
                  sx={{
                    boxShadow: "none",
                    border: 0,
                    backgroundColor: "transparent",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">{e.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      border: 1,
                      borderColor: "rgba(0, 0, 0, 0.12)",
                      borderRadius: 3,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      p: 2,
                    }}
                  >
                    {e.modifiers.map((l: any) => {
                      return (
                        <div key={l.id}>
                          <Multiple modifiers={l} />
                        </div>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              );
            })}

            {/* <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: yellow[500],
                    "&.Mui-checked": {
                      color: yellow[500],
                    },
                  }}
                  defaultChecked
                />
              }
              label="Бортик сирно-ковбасний +65 ₴"
            /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
